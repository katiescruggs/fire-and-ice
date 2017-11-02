## Ice and Fire Redux Challenge

### Setup
  This application is built from create-react-app
* `npm install`
* `npm start`
* Pull down the api: https://github.com/turingschool-examples/ice_fire_api

### What you will be building:

View a recording of it here -> http://recordit.co/X5H0FRbNXO/gif/notify

##### Iteration 0:  

First thing we want to do is fetch some info for us to display.
You are going to want to grab all the house data and populate a redux store. The data can be found at this API end point --> http://localhost:3001/api/v1/houses.

##### Iteration 1:

Once you've populated your redux store with your data you are going to want to display the data as a card. While we wait for our data to arrive please provide a loading gif for our front-end.

Things to display:
`name, founded, seats, titles, coatOfArms, ancestralWeapons, words`

Nice work! You basically have a full website. This might be a good time to start testing your actions, reducers, and components.

##### Iteration 2:

If you've looked at the house objects coming in, you might have noticed the `swornMembers` array. This is an array of URL endpoints to hit. You'll need to make a `POST` request to `http://localhost:3001/api/v1/character` to retrieve the desired sworn member(The `/character` endpoint will grab that data for you and respond with the house sworn house member). You will also need to send in the body a JSON string of an object `{ url: '...url' }`

This data should not be displayed until the user clicks on the card.
You can solve this any way you'd like. If you decided to use router you might want to consider creating a dynamic route to render each sworn member.
