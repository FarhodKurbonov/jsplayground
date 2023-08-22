let user = {
  name: 'John',
  age: 30,
  gener: true,
}

let room = {
  number: 23,
}

let meetup = {
  title: 'Conference',
  participants: [
    { name: 'John', job: { company: 'ABC' } },
    { name: 'Alice', job: { company: 'CDE' } },
  ],
  place: room, // meetup ссылается на room
}

room.occupiedBy = meetup

let jsonString = JSON.stringify(meetup, ['title', 'participants', 'name', 'job'])
//console.info(jsonString)

// SERVER ==> PARSE

console.info(JSON.parse(jsonString))
