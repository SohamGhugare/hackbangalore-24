package services

import (
	"strings"

	"github.com/SohamGhugare/hackbangalore-24/database/models"
)

func StartupSignupSvc(startupSignup models.StartupSignup) (models.Startup, error) {

	var startup models.Startup

	startup, err := models.Startup{}.New(startupSignup)

	if err != nil {
		return models.Startup{}, err
	}

	return startup, nil

}

func GetAllStartupsSvc(query string) ([]models.Startup, error) {

	startups, err := models.Startup{}.GetAll()

	if err != nil {
		return []models.Startup{}, err
	}

	if query == "" {
		return startups, nil
	}

	res := make([]models.Startup, 0)

	for _, startup := range startups {
		for _, values := range startup.Tags {
			for _, value := range values {
				for _, q := range strings.Split(query, ",") {
					if strings.Contains(strings.ToLower(value), strings.ToLower(strings.ReplaceAll(q, "\"", ""))) {
						res = append(res, startup)
						break
					}
				}
			}
		}
	}

	return res, nil

}
