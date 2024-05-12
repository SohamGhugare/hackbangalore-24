import json
import requests

with open("data.json", "r") as f:
    data = json.load(f)

c=1
for d in data["data"]:

    d["milestones"] = []
    d["team"] = []
    d["resources"] = {
            "pitch_deck": "akodkas",
            "business_plan": "sdadasda",
            "financials": "sdadsad",
            "other": "sdadw"
        }
    for key, value in d["tags"].items():
        d["tags"][key] = [value]
    res = requests.post("http://127.0.0.1:8080/api/v1/startup/signup", json=d)
    print(f"Sent {c}", res.status_code)
    c+=1
