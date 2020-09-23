window.addEventListener("load", function () {
    document.getElementById("signature-form").addEventListener("submit", function (e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        let file = document.getElementById("myFile").value;
       console.log(toBase64(file))
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
                document.getElementById("not-authen").innerHTML = JSON.parse(http.response).message;
            }
        };
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

    });
});
