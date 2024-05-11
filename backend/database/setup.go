package database

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DatabaseClient *mongo.Client

func ConnectDB() {

	uri := os.Getenv("MONGO_URI")
	if uri == "" {
		log.Fatal("Set your 'MONGO_URI' environment variable. ")
	}

	client, err := mongo.Connect(context.TODO(), options.Client().
		ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	DatabaseClient = client
}
