const HISTORY_URL = "http://localhost:8088/user-token";
const STATUS_URL = "http://localhost:8088/user-token/"
let yourObject = JSON.parse(httpGet(HISTORY_URL, getToken()))
console.log(yourObject)
w3.displayObject("id01", yourObject);

function getToken() {
    return window.localStorage.getItem("token");
}

function httpGet(theUrl, token) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Bearer " + token)
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function changeStatus(id) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", STATUS_URL + id, false); // false for synchronous request
    if (getToken) {
        xmlHttp.setRequestHeader("Authorization", "Bearer " + getToken())
        xmlHttp.send(null);
        console.log(xmlHttp.responseText)
        location.reload();
    } else window.location.replace("../Login.html");
}

function clearToken() {
    localStorage.removeItem("token")
}