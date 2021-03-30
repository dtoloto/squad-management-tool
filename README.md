# Squad Management Tool

This tool was developed to help users to create and manage their favorite teams, choosing players who have already been in a world cup to compose their squads. They can create real ou fantasy teams, choosing name, descriptions, tags, formation and players.

Besides that, users also can see some statics, like top 5 teams with highest/lowest average age and most/less picked players.


**[Demo](https://squad-management-tool-zeta.vercel.app/)**

## API - FOOTBALL
The [API-FOOTBALL](https://www.api-football.com/) was consumed to search and get players data

## Getting Started
### Installation

Clone this project using: 

    $ git clone https://github.com/dtoloto/squad-management-tool.git
    $ cd squad-management-tool
    
Once you have the project, install all dependencies:

    $ yarn

Then, you have to create the `.env` file with the following data:

    #API FOOTBALL
    REACT_APP_API_URL = YOUR_API_FOOTBALL_URL
    REACT_APP_API_KEY = YOUR_API_FOOTBALL_KEY
    REACT_APP_API_HOST = YOUR_API_FOOTBALL_HOST

### Running
Once the installation is done, you can run the following command:

    $ yarn start

### Tests
To run tests you can use:

    $ yarn test

To run tests and get the coverage, run:

    $ yarn test --coverage --watchAll false

and check the file:  `./coverage/lcov-report/index.html`
