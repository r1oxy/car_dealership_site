var objPeople = [{
        username: "2222",
        password: "2222"
    },
    {
        username: "33333",
        password: "33333"
    },
    {
        username: "!!!!",
        password: "!!!!"
    },
]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            document.getElementById('positive').style.cssText = "display: block;";
            document.getElementById('positive').innerHTML = "Logged in, redirecting";
            document.getElementById('negative').style.cssText = "display: none;";
            window.location.href = "../index.html";
            // // window.location.replace('page2.html');
            return
        }
    }
    document.getElementById('negative').style.cssText = "display: block;";
    document.getElementById('negative').innerHTML = "Incorrect email or password";

}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    }
}
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());