function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane User";
console.log(greeter(user)); //This will work correctly now

// Alternative solution if you need to handle an array of strings
function greetMultiple(people: string[]): string {
  return people.map(person => `Hello, ${person}`).join('\n');
}

let users = ["Jane User", "John Doe"];
console.log(greetMultiple(users));