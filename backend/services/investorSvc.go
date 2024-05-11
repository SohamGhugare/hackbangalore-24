package services

import (
	"errors"

	"github.com/SohamGhugare/hackbangalore-24/database/models"
	"github.com/SohamGhugare/hackbangalore-24/utils"
)

// service for signing up an investor
func InvestorSignupSvc(investorSignup models.InvestorSignup) (models.Investor, error) {

	var investor models.Investor

	// check if investor already exists
	if investor.DoesExist(investorSignup.Email) {
		return models.Investor{}, errors.New("Investor already exists")
	}

	investor, err := models.Investor{}.New(investorSignup)

	if err != nil {
		return models.Investor{}, err
	}

	return investor, nil

}

// service for loging in an investor
func InvestorLoginSvc(investorLogin models.InvestorLogin) (models.Investor, error) {

	investor, err := models.Investor{}.Get(investorLogin.Email)

	if err != nil {
		return models.Investor{}, err
	}

	if !utils.CheckPasswordHash(investorLogin.Password, investor.Password) {
		return models.Investor{}, errors.New("Invalid password")
	}

	return investor, nil

}
