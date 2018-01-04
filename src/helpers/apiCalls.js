export const fetchHouses = async () => {
  const housesFetch = await fetch('http://localhost:3001/api/v1/houses');
  return await housesFetch.json();
};

export const fetchMembers = async (membersArray) => {
  const memberPromises = membersArray.map(url => {
    return fetchMember(url);
  });

  const allMembers = await Promise.all(memberPromises);
  console.log(allMembers);
};

export const fetchMember = async (url) => {

  const memberFetch = await fetch('http://localhost:3001/api/v1/character', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({url})
  });


  const member = await memberFetch.json();
  return member.name;
};