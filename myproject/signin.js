
document.querySelector("form").addEventListener("submit", mufun)
function mufun() {
    event.preventDefault()
    var email = document.querySelector("#email").value
    var fname = document.querySelector("#f_name").value
    var lname = document.querySelector("#l_name").value
    var pass = document.querySelector("#password").value
    var obj = {
        email: email,
        fname: fname,
        lname: lname,
        password: pass
    }
    localStorage.setItem("sign_data", JSON.stringify(obj))
    location.replace("index.html")

   

}
