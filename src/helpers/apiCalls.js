export const fetchHouses = async () => {
  const housesFetch = await fetch('http://localhost:3001/api/v1/houses');
  return housesFetch.json();
};

export const getMemberArray = async (setMembers, houseName, swornMembers) => {
  const members = await fetchMembers(swornMembers);
  const houseMembers = {
    [houseName]: members
  };
  setMembers(houseMembers);
};

export const fetchMembers = async (membersArray) => {
  const memberPromises = membersArray.map(async (url) => {
    return await fetchMember(url);
  });

  const allMembers = await Promise.all(memberPromises);
  return allMembers;
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