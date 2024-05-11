package initializers

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv() {

	if os.Getenv("MONGO_URI") != "" {
		return
	}

	// loading the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Failed to load .env file...")
	}

}
