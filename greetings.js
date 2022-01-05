const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector ("#login-form input");
const greetings = document.querySelector ("#greetings")
const logout = document.querySelector("#logout-form");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";


function onLoginSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const TypedUserName = loginInput.value;
    localStorage.setItem (USERNAME_KEY, TypedUserName)
    paintGreetings(TypedUserName);
}

function paintGreetings (username){
    greetings.innerText = `Welcome to our website, ${username} 😀` ;
    greetings.classList.remove(HIDDEN_CLASSNAME)
    logout.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
   loginForm.addEventListener("submit", onLoginSubmit); // waiting for the sbumit
   logout.classList.add(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername)
}


function onLogoutSubmit() {

    localStorage.removeItem(USERNAME_KEY);
    window.location.reload()
    }
    
    
logout.addEventListener("submit", onLogoutSubmit);
    

// greetings.innerText = "Hello " + username; = greetings.innerText = `Hello ${username}`;
// link.addEventListener ("click", handleLinkClick)

// function handleLinkClick (event){
  //   event.preventDefault();
   //  console.log(event);
   //  alert ("clicked");
// }

 //const UserName = loginInput.value;
// const loginButton = document.querySelector ("#login-form button");
// loginButton.addEventListener("click",HandleLoginBtnClick); -> works with form in html

//if (UserName ===""){ // - this alternatively should be used in html to restrict such
 //    alert ("Please Input UserName");
 //} else if (UserName.length > 15) {
 //   alert ("Your Name is Too Long")
// }
//};

//or 
//const loginForm = document.getElementById ("login-form") //or getElementById without# 
//const loginInput = loginForm.querySelector ("input")
//const loginButton = loginForm.querySelector ("button")
