package models

import (
	"context"
	"time"

	"github.com/SohamGhugare/hackbangalore-24/database"
	"github.com/SohamGhugare/hackbangalore-24/utils"
)

// InvestorSignup is the model for the investor signup request
type InvestorSignup struct {
	Name     string                `bson:"name" json:"name"`
	Email    string                `bson:"email" json:"email"`
	Password string                `bson:"password" json:"password"`
	Tags     []map[string][]string `bson:"tags" json:"tags"`
}

// Investor is the model for the investor
type Investor struct {
	Name      string                `bson:"name" json:"name"`
	Email     string                `bson:"email" json:"email"`
	Password  string                `bson:"password" json:"password"`
	Tags      []map[string][]string `bson:"tags" json:"tags"`
	CreatedAt time.Time             `bson:"created_at" json:"created_at"`
}

// new method for InvestorSignup
func (Investor) New(investorSignup InvestorSignup) (Investor, error) {
	hash, _ := utils.HashPassword(investorSignup.Password)

	investor := Investor{
		Name:      investorSignup.Name,
		Email:     investorSignup.Email,
		Password:  hash,
		Tags:      investorSignup.Tags,
		CreatedAt: time.Now(),
	}

	coll := database.DatabaseClient.Database("hackbangalore").Collection("investors")
	_, err := coll.InsertOne(context.TODO(), investor)

	return investor, err
}
