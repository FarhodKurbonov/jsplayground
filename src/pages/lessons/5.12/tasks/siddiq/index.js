let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let jsonFormat = JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {
        return undefined
    } else {
        return value
    }
})

console.log(jsonFormat);


let user = {
    name: "Василий Иванович",
    age: 35
};

let userString = JSON.parse(JSON.stringify(user))
console.log(userString);