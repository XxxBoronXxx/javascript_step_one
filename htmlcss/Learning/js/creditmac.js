let user = {
    age : 25,
    job : true,
    budget : 1700
};

const ageJob = (age, job) => {
    if (age > 24 && job == true) {
        user.budget += 500;
    } else if (age > 24){
        user.budget += 100;
    }
}

const creditForMacBook = (user) =>{
    ageJob(user.age, user.job)
    if (user.budget >= 2000) {
        return `Покупка MacBook ценой 2000$ возможна, на вашем счету ${user.budget}`
    } else {
        return `Копи бабки нищий, у тебя на счету ${user.budget}`
    }
}

console.log(creditForMacBook(user));