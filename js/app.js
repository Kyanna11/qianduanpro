const startChatButton = document.getElementById("startChat");
const settingsButton = document.getElementById("openSettings");

const overlay = document.getElementById("settingsOverlay");
const closeButton = document.getElementById("closeSettings");

startChatButton.addEventListener("click", () => {

    alert("聊天页面开发中 🌊");

});

settingsButton.addEventListener("click", () => {

    overlay.classList.add("show");

});

closeButton.addEventListener("click", () => {

    overlay.classList.remove("show");

});

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        overlay.classList.remove("show");

    }

});
