const users = ["Fatih", "Doğan","Tuğba","Mithat","Fırat","Mahmut","Elif"];
var result = "";
function userList(){
    users.forEach(returnList);
   console.log(result);
}

function returnList(item){
 result += " " + item;
}