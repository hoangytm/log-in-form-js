const LOGIN_URL = "http://localhost:8088/api/auth/login";
window.addEventListener("load", function () {
    document.getElementById("my-form").addEventListener("submit", function (e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        console.log(LOGIN_URL)
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        const params = {
            username: username,
            password: password,
        };
        const http = new XMLHttpRequest();
        http.open("POST", LOGIN_URL);
        http.setRequestHeader("Content-type", "application/json");
        http.send(JSON.stringify(params));
        http.onload = function () {
            console.log(http);
            if (http.status === 200) {
                let token = JSON.parse(http.response).authenticationToken;
                window.localStorage.setItem("token", token)
                window.location.replace("./home/home.html");
            } else {
                document.getElementById("not-authen").innerHTML = 'username or password is not correct';
            }
        };
    });
});
