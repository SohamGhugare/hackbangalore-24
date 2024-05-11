package handlers

import (
	"github.com/SohamGhugare/hackbangalore-24/services"
	"github.com/gin-gonic/gin"
)

func RegisterStartupHandler(c *gin.Context) {
	var body struct {
		Name string `json:"name"`
	}

	err := c.Bind(&body)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "Error occured while binding the request.",
			"error":   err.Error(),
		})
		return
	}

	hash := services.RegisterStartupSvc(body.Name)

	c.JSON(200, gin.H{
		"message": "Startup registered successfully.",
		"hash":    hash,
	})

}
