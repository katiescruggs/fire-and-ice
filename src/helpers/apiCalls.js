export const fetchHouses = async () => {
  const housesFetch = await fetch('http://localhost:3001/api/v1/houses');
  return await housesFetch.json();
}