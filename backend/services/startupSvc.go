package services

import "github.com/SohamGhugare/hackbangalore-24/database/models"

func StartupSignupSvc(startupSignup models.StartupSignup) (models.Startup, error) {

	var startup models.Startup

	startup, err := models.Startup{}.New(startupSignup)

	if err != nil {
		return models.Startup{}, err
	}

	return startup, nil

}
