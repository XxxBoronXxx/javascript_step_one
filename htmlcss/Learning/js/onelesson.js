let name;
//name = "Peter";
console.log(name);

let user = {
    age : 18,
    city : "LA",
    experienceYear : 3
};

console.log(user.city);

let a = 5;
let b = a++; // вернул старое значение, нужно юзать префиксный инкремент(++a) -->> b = 6;

console.log(b);
console.log(a);

const secretNumber = '52';

if (Number(secretNumber) === 52) {
    console.log("Угадал строго");
} // в общем эта хуйня нужна хз где 

if (secretNumber == 52) {
    console.log("Угадал не строго");
}