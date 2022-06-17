var data = JSON.parse(localStorage.getItem("sign_data"))


function myfunction() {
    event.preventDefault();
    var mail = document.querySelector("#email").value
    var pass = document.querySelector("#password").value
    if (mail == data.email && pass == data.password) {
        alert("sign in successful")
        var obj = {
            mail: mail,
            password: pass
        }
        localStorage.setItem("login_data", JSON.stringify(obj))
        window.location.href = "index.html"


    } else {
        alert("Email and password don't match. Try again")
    }

}
// if (mail == data.email && pass == data.password) {
//     document.querySelector("#login_btn").innerText = 'jk'
// }
