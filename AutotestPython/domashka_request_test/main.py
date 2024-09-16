import requests
URL = 'https://api.pokemonbattle.ru/v2'
TOKEN ='a606e8dfcc0308dc6d51dbb7b1fa7aa3'
HEADER = {'Content-Type' : 'application/json', 'trainer_token' : TOKEN}

body_create = {
    "name": "Бульбазавр",
    "photo_id": 1
}

response_create = requests.post(url = f'{URL}/pokemons', headers = HEADER, json = body_create)
print(response_create.text)

id = response_create.json()['id']
print(id)

body_change = {
    "pokemon_id": id,
    "name": "NAME111",
    "photo_id": 2
}

response_change = requests.put(url = f'{URL}/pokemons', headers = HEADER, json = body_change)
print(response_change.text)

body_catch = {
    "pokemon_id": id
}

response_catch = requests.post(url = f'{URL}/trainers/add_pokeball', headers = HEADER, json = body_catch)
print(response_catch.text)






