package models

import (
	"context"
	"time"

	"github.com/SohamGhugare/hackbangalore-24/database"
)

type StartupSignup struct {
	Name               string              `bson:"name" json:"name"`
	Email              string              `bson:"email" json:"email"`
	Url                string              `bson:"url" json:"url"`
	Industry           string              `bson:"industry" json:"industry"`
	StageOfDevelopment string              `bson:"stage_of_development" json:"stage_of_development"`
	Description        string              `bson:"description" json:"description"`
	Tags               map[string][]string `bson:"tags" json:"tags"`
	Team               []TeamMember        `bson:"team" json:"team"`
	Milestones         []Milestone         `bson:"milestones" json:"milestones"`
	Resources          Resources           `bson:"resources" json:"resources"`
}

type Startup struct {
	Name               string              `bson:"name" json:"name"`
	Email              string              `bson:"email" json:"email"`
	Url                string              `bson:"url" json:"url"`
	Industry           string              `bson:"industry" json:"industry"`
	StageOfDevelopment string              `bson:"stage_of_development" json:"stage_of_development"`
	Description        string              `bson:"description" json:"description"`
	Tags               map[string][]string `bson:"tags" json:"tags"`
	Team               []TeamMember        `bson:"team" json:"team"`
	Milestones         []Milestone         `bson:"milestones" json:"milestones"`
	Activities         []Activity          `bson:"activities" json:"activities"`
	Resources          Resources           `bson:"resources" json:"resources"`
	Verified           bool                `bson:"verified" json:"verified"`
	CreatedAt          time.Time           `bson:"created_at" json:"created_at"`
}

type ActivityAdd struct {
	Name     string   `bson:"name" json:"name"`
	Activity Activity `bson:"activity" json:"activity"`
}

type Activity struct {
	Date        time.Time `bson:"date" json:"date"`
	Description string    `bson:"description" json:"description"`
	Type        string    `bson:"type" json:"type"`
}

type TeamMember struct {
	Name     string `bson:"name" json:"name"`
	Role     string `bson:"role" json:"role"`
	LinkedIn string `bson:"linkedin" json:"linkedin"`
	Bio      string `bson:"bio" json:"bio"`
}

type Milestone struct {
	Description string    `bson:"description" json:"description"`
	TargetDate  time.Time `bson:"target_date" json:"target_date"`
}

type Resources struct {
	PitchDeck    string `bson:"pitch_deck" json:"pitch_deck"`
	BusinessPlan string `bson:"business_plan" json:"business_plan"`
	Financials   string `bson:"financials" json:"financials"`
	Other        string `bson:"other" json:"other"`
}

func (Startup) New(startupSignup StartupSignup) (Startup, error) {
	startup := Startup{
		Name:               startupSignup.Name,
		Email:              startupSignup.Email,
		Url:                startupSignup.Url,
		Industry:           startupSignup.Industry,
		StageOfDevelopment: startupSignup.StageOfDevelopment,
		Description:        startupSignup.Description,
		Tags:               startupSignup.Tags,
		Team:               startupSignup.Team,
		Milestones:         startupSignup.Milestones,
		Resources:          startupSignup.Resources,
		Activities:         []Activity{},
		Verified:           false,
		CreatedAt:          time.Now(),
	}

	coll := database.DatabaseClient.Database("hackbangalore").Collection("startups")
	_, err := coll.InsertOne(context.TODO(), startup)

	return startup, err
}

func (Startup) AddActivity(a ActivityAdd) error {
	coll := database.DatabaseClient.Database("hackbangalore").Collection("startups")
	_, err := coll.UpdateOne(context.TODO(), map[string]string{"name": a.Name}, map[string]interface{}{
		"$push": map[string]interface{}{
			"activities": a.Activity,
		},
	})

	return err
}

func (Startup) GetAll() ([]Startup, error) {
	coll := database.DatabaseClient.Database("hackbangalore").Collection("startups")
	cursor, err := coll.Find(context.TODO(), map[string]string{})
	if err != nil {
		return nil, err
	}

	startups := []Startup{}
	cursor.All(context.Background(), &startups)

	return startups, nil
}
