package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadEnv() {

	// loading the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Failed to load .env file...")
	}

}
