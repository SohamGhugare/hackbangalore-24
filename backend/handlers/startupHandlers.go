package handlers

import (
	"github.com/SohamGhugare/hackbangalore-24/database/models"
	"github.com/SohamGhugare/hackbangalore-24/services"
	"github.com/gin-gonic/gin"
)

func StartupSignupHandler(c *gin.Context) {
	var startupSignup models.StartupSignup

	err := c.Bind(&startupSignup)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while binding the request.",
			"error":   err.Error(),
		})
		return
	}

	startup, err := services.StartupSignupSvc(startupSignup)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while adding startup to database.",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "Startup submitted successfully.",
		"startup": startup,
	})
}

func GetAllStartupsHandler(c *gin.Context) {
	query := c.Query("filter")

	startups, err := services.GetAllStartupsSvc(query)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while fetching startups from database.",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message":  "Startups fetched successfully.",
		"startups": startups,
	})
}

func AddActivityHandler(c *gin.Context) {
	var activity models.ActivityAdd

	err := c.Bind(&activity)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while binding the request.",
			"error":   err.Error(),
		})
		return
	}

	err = services.AddActivitySvc(activity)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while adding activity to database.",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "Activity added successfully.",
	})
}
