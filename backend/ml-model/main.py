from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from model import get_recommendations

app = FastAPI()

class Preferences(BaseModel):
    social_impact: str
    environmental_impact: str
    risk_tolerance: int
    investment_duration: int

@app.post("/recommend")
async def recommend(preferences: Preferences):
    pref = {
        "social_impact": preferences.social_impact,
        "environmental_impact": preferences.environmental_impact,
        "risk_tolerance": preferences.risk_tolerance,
        "investment_duration": preferences.investment_duration
    }

    try:
        idx = get_recommendations(pref)

        return {"startup_ids": idx}
    except Exception as e:
        return {"startup_ids": []}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
