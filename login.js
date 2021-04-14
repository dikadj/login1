
let userName = document.getElementById("userName");
let passWord = document.getElementById("password");
let person =[];
let Email = [];
let p = 0;
function Store() {
console.log(userName.value)
person[p] = {email:userName.value, password: passWord.value};
console.log(person)
localStorage.setItem('i', JSON.stringify(person));
p++;
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
/*Also note that localStorage can only store strings.

To store arrays or objects, you would have to convert them to strings. */



/*let userName = document.getElementById("userName");
let passWord = document.getElementById("password");

function Store() {
localStorage.setItem("user", userName.value);
localStorage.setItem("pw", passWord.value);
}
let x = localStorage.getItem('user');
let y = localStorage.getItem('pw');

function check() {
    
    if( x === userName.value && y === passWord.value) {
    alert("You are logged in")
    }

    else {
        alert("you frogot your password idiot")
    }
}
*/