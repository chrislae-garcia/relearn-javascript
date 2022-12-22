const getTheTitles = function(arrOfObjs) {
  const arrTitles = [];

  arrOfObjs.forEach(e => {
    arrTitles.push(e.title);
  });

  return arrTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
