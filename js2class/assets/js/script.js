class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function getUser(){
    const gu = new user("Erhan", 33)
    console.log(`"name = ${gu.name} age ${gu.age}`)
}