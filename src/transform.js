function groupAdultsByAgeRange(name, age){

    
}

const peoples = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]

  const youngerThanTwenty = peoples.filter(people => age <= 20)
  const youngerThanThirty = peoples.filter(people => age <= 30)
  const youngerThanFourty = peoples.filter(people => age <= 40)
  const youngerThanFifty = peoples.filter(people => age <= 50)
  const olderThanFifty = peoples.filter(people => age > 50)

module.exports = {groupAdultsByAgeRange}



  


















