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
- [ ] Entity should have at least 5 custom attributes
    - [ ] Each attribute should have a type defined: number, string, ISO 8601 date string, boolean, object, array or other
    - [ ] Each attribute should have restrictions defined: list of constants, or number range, or string length, or string format, or object schema, or array schema or other. For example, you can use `joi` language to define restrictions: https://github.com/hapijs/joi/blob/v13.1.2/API.md
    
## Entity "Vote"
- [ ] Defines a single vote for a NBA player.
- [ ] 4 mandatory attributes:
    - [ ] ID - a identifying number of a team in our system.
    - [ ] Username - name of a vot
    - [ ] PlayerID - id of an active NBA player
    - [ ] Comment - 
- [ ] Entity should have at least 5 custom attributes
    - [ ] Each attribute should have a type defined: number, string, ISO 8601 date string, boolean, object, array or other
    - [ ] Each attribute should have restrictions defined: list of constants, or number range, or string length, or string format, or object schema, or array schema or other. For example, you can use `joi` language to define restrictions: https://github.com/hapijs/joi/blob/v13.1.2/API.md
    
    
## API definition
- [ ] "Balldontlie API" is going to be used
- [ ] Voting going to be created with PUT, POST, DELETE methods.
- [ ] API will have 4 methods:
    - [ ] A method to return player by ID.  i.e. GET https://www.balldontlie.io/api/v1/players/<ID>
    - [ ] A method to return multiple players (Array) by ID. i.e. https://www.balldontlie.io/api/v1/players
    - [ ] A method that deletes vote unit
    - [ ] A method that updates vote unit. 
- [ ] Each method should have HTTP method defined
- [ ] Each method should have URI defined (use {id} as entity ID placeholder)
- [ ] Should return all 4xx errors in unified format. Define format using `joi` language
- [ ] Should return all 5xx errors in unified format. Define format using `joi` language

## UI definition
Main page example
https://wireframe.cc/wyVUiF

