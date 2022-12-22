const findTheOldest = function(people) {
  
  people.forEach(element => {
    if(element.yearOfDeath==undefined) {
      element.yearOfDeath = new Date().getFullYear();
    }
  });

  const oldest = people.sort((a, b) => {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  })

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
