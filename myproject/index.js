// document.querySelector("#sign_in").addEventListener("click", myfun)

function myclick() {
    event.preventDefault();
    document.querySelector("#login_naw").style.display = "block"
}
var data = JSON.parse(localStorage.getItem("sign_data"))
var data2 = JSON.parse(localStorage.getItem("login_data"))
if (data.email == data2.mail) {
    document.querySelector("#login_btn").innerText = data.fname
}
