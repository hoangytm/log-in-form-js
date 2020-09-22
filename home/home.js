let myObject = {
    "customers": [
        {"id": 1, "CustomerName": "Alfreds Futterkiste", "Color": "red"},
        {"id": 2, "CustomerName": "Ana Trujillo Emparedados y helados", "Color": "green"},
        {"id": 3, "CustomerName": "Antonio Moreno Taquer a", "Color": "blue"},
        {"id": 4, "CustomerName": "Around the Horn", "Color": "yellow"}
    ]
};
const HISTORY_URL = "http://localhost:8088/user-token/abc";
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