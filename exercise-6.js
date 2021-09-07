function adultFilter(persons) {
const adults = [];

for(person of persons) { // of e per gli ogetti iterabili per esempio un array, in va utilizzato nel caso in cui devo andare a controllare la proprietà di un oggetto
  if(person.age < 18) {
    continue;
  } 
  adults.push(person); //prende quello che c'e dentro  la parentesi e lo mette dentro alduts 
}
return adults;
}





const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);


console.log(persons);
console.log(adults);