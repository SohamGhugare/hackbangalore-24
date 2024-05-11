package services

import "github.com/SohamGhugare/hackbangalore-24/database/models"

// InvestorSignupSvc is the service for signing up an investor
func InvestorSignupSvc(investorSignup models.InvestorSignup) (models.Investor, error) {
	investor, err := models.Investor{}.New(investorSignup)

	if err != nil {
		return models.Investor{}, err
	}

	return investor, nil

}
