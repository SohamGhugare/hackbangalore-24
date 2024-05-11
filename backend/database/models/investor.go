package models

import "time"

// InvestorSignup is the model for the investor signup request
type InvestorSignup struct {
	Name     string              `bson:"name" json:"name"`
	Email    string              `bson:"email" json:"email"`
	Password string              `bson:"password" json:"password"`
	Tags     []map[string]string `bson:"tags" json:"tags"`
}

// Investor is the model for the investor
type Investor struct {
	Name      string              `bson:"name" json:"name"`
	Email     string              `bson:"email" json:"email"`
	Password  string              `bson:"password" json:"password"`
	Tags      []map[string]string `bson:"tags" json:"tags"`
	CreatedAt time.Time           `bson:"created_at" json:"created_at"`
}
