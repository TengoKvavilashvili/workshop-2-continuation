// workshop 2 continuation

// Problem 5: arrays

let numbers = [];

for (let i = -100; i <= 100; i++) {
   numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
   numbers[i] += 0;
}
console.log(numbers);

// Problem 6:

for (let i = 0; i < numbers.length; i++) {
   numbers[i] = Math.pow(numbers[i], 3);
}

console.log(numbers);

// Problem 7:

const userNames = ["GIORGI", "DAVITI", "NINI", "NIKA", "ELENE", "SOPO", "NINA", "ELLI", "LEVANI", "NUCA"];

for (let i = 0; i < userNames.length; i++) {
   userNames[i] = userNames[i].toLowerCase();
}

console.log(userNames);

// Problem 8:

for (let i = 0; i < userNames.length; i++) {
   userNames[i] = userNames[i].toUpperCase();
}

console.log(userNames);

// Problem 9:

let surNames = ["Bakhtadze", "Petriashvili", "Ananidze", "Chakvetadze", "Daraselia", "Suladze", "Kvaracxelia", "Beridze", "Giorgadze", "Daushvili"];

surNames = surNames.map(surname => surname.toUpperCase());

console.log(surNames);

// Problem 10:

let firstNames = ["GIORGI", "DAVITI", "NINI", "NIKA", "ELENE", "SOPO", "NINA", "ELLI", "LEVANI", "NUCA"];

let lastNames = ["Bakhtadze", "Petriashvili", "Ananidze", "Chakvetadze", "Daraselia", "Suladze", "Kvaracxelia", "Beridze", "Giorgadze", "Daushvili"];

let users = [];
for (let i = 0; i < firstNames.length; i++) {
   let fullName = firstNames[i] + " " + lastNames[i];
   users.push([fullName]);
}

console.log(users);

// Problem 11:

users = users.filter(user => {
   const [firstName, lastName] = user[0].split(' ');
   return !firstName.startsWith('a') && lastName.includes('i');
});

console.log(users);