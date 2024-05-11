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
