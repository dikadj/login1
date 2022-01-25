

let userName = document.getElementById("userName");
let passWord = document.getElementById("password");
let person =[];
let Email = [];
let p = 1;

function Store() {
    let u =JSON.parse(localStorage.getItem('i'))
    p =u.length;
    console.log(u.length)
    console.log(p)
person[p]= {email:userName.value, password: passWord.value};

localStorage.setItem('i', JSON.stringify(person));


}


function check() {
    let Email=JSON.parse(localStorage.getItem('i'));
    console.log (Email[1].email);
    for (let p = 0; p < Email.length; p++) {
        
        if( userName.value === Email[p].email&& passWord.value === Email[p].password) {

            alert("You are logged in")
            return true;   
        }
            
    }  
            
    alert('you forgot your password');
    return false;
   
};







/*
let userName = document.getElementById("userName");
let passWord = document.getElementById("password");
let person =[];
let Email = [];

//https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage
function Store() {
    let oldItems = JSON.parse(localStorage.getItem('i')) || [];
console.log(userName.value)
person= {email:userName.value, password: passWord.value};
oldItems.push(person)
console.log(person)
localStorage.setItem('i', JSON.stringify(oldItems));

}


function check() {
    let Email=JSON.parse(localStorage.getItem('i'));
    console.log (Email[1].email);
    for (let p = 0; p < Email.length; p++) {
        
        if( userName.value === Email[p].email&& passWord.value === Email[p].password) {

            alert("You are logged in")
            return true;   
        }
            
    }  
            
    alert('you forgot your password');
    return false;
   
};*/
