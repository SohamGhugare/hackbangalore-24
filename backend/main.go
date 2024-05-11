package main

import (
	"net/http"

	"github.com/SohamGhugare/hackbangalore-24/database"
	"github.com/SohamGhugare/hackbangalore-24/initializers"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

var DatabaseClient *mongo.Client

func init() {
	// loading dotenv file
	initializers.LoadEnv()

	// connecting to database
	DatabaseClient = database.ConnectDB()
}

func main() {

	// creating gin engine
	r := gin.Default()

	// test route
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Pong!",
		})
	})

	// running the server
	r.Run()
}
