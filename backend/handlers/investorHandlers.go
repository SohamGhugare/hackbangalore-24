package handlers

import (
	"github.com/SohamGhugare/hackbangalore-24/database/models"
	"github.com/SohamGhugare/hackbangalore-24/services"
	"github.com/gin-gonic/gin"
)

// InvestorSignupHandler is the handler for investor signup
func InvestorSignupHandler(c *gin.Context) {

	var investorSignup models.InvestorSignup

	err := c.Bind(&investorSignup)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Invalid request. Please check request body.",
			"error":   err.Error(),
		})
		return
	}

	investor, err := services.InvestorSignupSvc(investorSignup)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error while inserting in db, check dblogs.",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message":  "Investor signed up successfully.",
		"investor": investor,
	})

}
