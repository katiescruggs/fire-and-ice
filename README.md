## Ice and Fire Redux Challenge

### Setup
  This application is built from create-react-app
* `npm install`
* `npm start`
* Pull down the api: https://github.com/Tman22/ice_fire_api

### Tech Goals
* Practice making multiple fetch calls and using `Promise.all`
* Build a function website using `react & redux`. Feel free to add on `react router`.

### Building this website:

![GOT](http://recordit.co/X5H0FRbNXO/gif/notify)

OOhkay. This is a website for GOT nerds, pretty sweet right!?
We got some sweet css but lets work on getting this app fully functional.

##### Step 1:  
First thing we want to do is fetch some info for us to display.
Mmmm... lets grab all the important houses in Westeros from --> http://localhost:3001/api/v1/houses.

##### Step 2:
Once we've grabbed our data lets go ahead and make a house reducer and an action to add them!

##### Step 3:
Now that we have a centralized store lets go ahead and build out a `CardList` component that iterates the array of houses and displays `Card` components.

Things to display:
`name, founded, seats, titles, coatOfArms, ancestralWeapons, words`

Nice work! You basically have a full website!

##### Step 4:
Lets make a loader gif while we wait for the info to come back in.
Feel free to use local state to accomplish this. You might also solve this by checking to see if any houses in your House Reducer.

##### Step 5:
Here comes the fun part!
If you've looked at the house objects coming in, you might have noticed the `swornMembers` array. This is an array of URL endpoints to hit. For this you'll need to make a `POST` request to `http://localhost:3001/api/v1/character`. You will also need to send in the body a JSON string of an object { url: '...url' }

You might also make a dynamic route when you click the card to show these new members.

Either way, I don't want these members to be displayed until I click the card. Feel free to solve this however you like. *hint* Make a new action for the HouseReducer.
