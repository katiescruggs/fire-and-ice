export const fakeAction = () => ({type: 'FAKE'});


export const fetchHouses = async () => {
    const housesFetch = await fetch('http://localhost:3001/api/v1/houses');
    const houses = await housesFetch.json();

    console.log(houses);
}