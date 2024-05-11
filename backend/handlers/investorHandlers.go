package handlers

import (
	"time"

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
			"message": "Error occured while binding the request.",
			"error":   err.Error(),
		})
		return
	}

	investor, err := services.InvestorSignupSvc(investorSignup)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while adding investor to database.",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message":  "Investor signed up successfully.",
		"investor": investor,
	})

}

// InvestorLoginHandler is the handler for investor login
func InvestorLoginHandler(c *gin.Context) {

	var investorLogin models.InvestorLogin

	err := c.Bind(&investorLogin)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while binding the request.",
			"error":   err.Error(),
		})
		return
	}

	investor, err := services.InvestorLoginSvc(investorLogin)

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while logging in investor.",
			"error":   err.Error(),
		})
		return
	}

	token, err := services.CreateToken(investor.Email, "investor")

	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while creating token.",
			"error":   err.Error(),
		})
		return
	}

	c.SetCookie("token", token, int(time.Now().Add(time.Hour*24*7).Unix()), "", "", false, false)

	c.JSON(200, gin.H{
		"message":  "Investor logged in successfully.",
		"investor": investor,
	})

}
