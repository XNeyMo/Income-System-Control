from fastapi import FastAPI
import json
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

# Importing required services and models
from services.createPerson import create_person
from services.createPlace import create_place
from services.createEvent import create_event
from models.models import PersonIn
from models.models import PlaceIn
from models.models import EventIn
from services.constans import dataPath

# Initializing the FastAPI app
app = FastAPI()
app.title = "Income System Control"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=['home'])
def message():
    with open("index.html", "r") as file:
        content = file.read()
    return HTMLResponse(content)


# A GET endpoint to retrieve all 
# people data from to database
@app.get("/people")
async def get_people():
    with open(dataPath, "r") as f:
        data = json.load(f)

    return data['people']

# A GET endpoint to retrieve all places data from a database
@app.get("/places")
async def get_place():
    with open(dataPath, "r") as f:
        data = json.load(f)

    return data['places']

@app.get("/events")
async def get_event():
    with open(dataPath, "r") as f:
        data = json.load(f)

    return data['events']

@app.get("/people/{personalID}")
async def get_person(personalID: int):
    with open(dataPath, "r") as f:
        data = json.load(f)
    for person in data['people']:
        if person['personalID'] == personalID:
            return person
    return {"error": "Persona no encontrada"}


# A POST endpoint to create a new person object in the database
@app.post("/person")
async def create(person: PersonIn):
    createPerson = create_person(person)
    return {"Person": createPerson}

# A POST endpoint to create a new place object in the database
@app.post("/place")
async def create(place: PlaceIn):
    createPlace = create_place(place)
    return {"Place": createPlace}

# A POST endpoint to create a new place object in the database
@app.post("/event")
async def create(event: EventIn):
    createEvent = create_event(event)
    return {"Event": createEvent}