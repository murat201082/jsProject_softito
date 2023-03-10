class User{
    constructor(id,username,age,gander,licance){
        this.Id=id;
        this.UserName=username;
        this.Age=age;
        this.Gander=gander;
        this.Licance=licance;
    }
}
class Car{
    constructor(id,brand,color,price){
        this.Id=id;
        this.Brand=brand;
        this.Color=color;
        this.Price=price;
    }
}
class RentACar{
    constructor(id,userid,carid,day,totalprice){
        this.Id=id;
        this.UserId=userid;
        this.CarId=carid;
        this.Day=day;
        this.TotalPrice=totalprice;
    }
}

const UserList=[];
const CarList=[];
const RentList=[];
var userId=0;
var carId=0;
var rentId=0;

function addUser(){
    const userName=document.getElementById("UserName").value;
    const age=document.getElementById("Age").value;
    const gander=document.getElementById("Male").checked;
    const licance=document.getElementById("Licance").checked;

    const selectGender=gander?"Male":"Famale";
    const ageControl=function(){
        if(age<18)
        {
          alert("Yaş 18 den küçük olamaz");
          return;  
        }
    };

    ageControl();
    userId++;
    const user=new User(userId,userName,age,selectGender,licance);
    UserList.push(user);
    console.log(UserList);
    userUpdate();
}

function addCar(){
    const brand=document.getElementById("Brand").value;
    const color=document.getElementById("Color").value;
    const price=document.getElementById("Price").value;

    if(brand==="" || color==="" || price===""){
        alert("Boş alan bırakılamaz");
        return;
    }
    carId++;
    const car=new Car(carId,brand,color,price);
    CarList.push(car);
    console.log(CarList);
    carUpdate();
}

function addRent(){
    const carId=document.getElementById("SelectUser").value;
    const userId=document.getElementById("SelectCar").value;
    const day=document.getElementById("RentDay").value;
    const getCarPrice=CarList.find((car)=>car.Id==carId);
    const totalPrice=day*getCarPrice.Price;

   
    rentId++;

    const rent=new RentACar(rentId,userId,carId,day,totalPrice);
    RentList.push(rent);
    console.log(RentList);
    rentUpdate();
}

function userUpdate(){
    const selectUser=document.getElementById("SelectUser");
    selectUser.innerHTML="";
    UserList.forEach((user)=>{
        const option=document.createElement("option");
        option.value=user.Id;
        option.innerText=user.UserName;
    
        selectUser.appendChild(option);
    });
    
}
function carUpdate(){
    const selectCar=document.getElementById("SelectCar");
    selectCar.innerHTML="";
    CarList.forEach((car)=>{
        const option=document.createElement("option");
        option.value=car.Id;
        option.innerText=car.Brand;
    
        selectCar.appendChild(option);
    });
    
}
function rentUpdate(){
    const rentLists=document.getElementById("RentList");
    rentLists.innerHTML="";
    RentList.forEach((rent)=>{
        const tr=document.createElement("tr");
        const tduser=document.createElement("td");
        const tdcar=document.createElement("td");
        const tdday=document.createElement("td");
        const tdtotalprice=document.createElement("td");

        // var username="";
        // UserList.forEach((user)=> {
        //    if(user.Id==rent.UserId){
        //     username=user.UserName;
        //     console.log(username);
        //    }
        // });
        const getUser=UserList.find((user)=>user.Id==rent.UserId);
        const getCar=CarList.find((car)=>car.Id==rent.CarId);
        console.log(getUser);
        console.log(getCar);
       

        tduser.innerText=getUser.UserName;
        tdcar.innerText=getCar.Brand;
        tdday.innerText=rent.Day;
        tdtotalprice.innerText=Number(rent.Day)*getCar.Price;

        tr.appendChild(tduser);
        tr.appendChild(tdcar);
        tr.appendChild(tdday);
        tr.appendChild(tdtotalprice);
        rentLists.appendChild(tr);
    });
    
}
rentUpdate();
userUpdate();
carUpdate();