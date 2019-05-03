# NBA players statistics with poll 
https://www.balldontlie.io

## Description
- [ ] System that will show information about each active NBA player. Another section of a web system will be poll in which users will vote for the best player. With vote user will have ability to add comment. 

## Entity "Player"
- [ ] Defines a single active NBA player.
- [ ] 4 mandatory attributes:
    - [ ] ID - a identifying number of a player in our system.
    - [ ] Full name - first and last name of a player
    - [ ] Team - team that player represents
    - [ ] Votes - number of votes for a certain NBA player
    
## Entity "Vote"
- [ ] Defines a single vote for a NBA player.
- [ ] 3 mandatory attributes:
    - [ ] ID - a identifying number of a team in our system.
    - [ ] Username - name of a vot
    - [ ] PlayerID - id of an active NBA player
- [ ] 1 Optional attribute:
    - [ ] Comment - comment of a user
    
## API definition
- [ ] "Balldontlie API" is going to be used
- [ ] Voting going to be created with PUT, POST, DELETE methods.
- [ ] API will have 4 methods:
    - [ ] A GET method to return player by ID.  i.e. GET https://www.balldontlie.io/api/v1/players/<ID>
    - [ ] A GET method to return multiple Teams (Array) GET https://www.balldontlie.io/api/v1/teams
    - [ ] A POST method to create vote. POST localhost:3000/postVote
    - [ ] A DELETE method that deletes vote unit DELETE localhost:3000/deleteVote
    - [ ] A PUT method that updates vote unit. PUT localhost:3000/updateVote
- [ ] Each method should have HTTP method defined
- [ ] Each method should have URI defined (use {id} as entity ID placeholder)
- [ ] Should return 4xx errors
- [ ] Should return 5xx errors. 

## UI definition
Main page example
https://wireframe.cc/wyVUiF

