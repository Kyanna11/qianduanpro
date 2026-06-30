const startChatButton = document.getElementById("startChat");
const settingsButton = document.getElementById("openSettings");

const overlay = document.getElementById("settingsOverlay");
const closeButton = document.getElementById("closeSettings");
const saveButton = document.getElementById("saveSettings");

const providerInput = document.querySelector("select");
const baseUrlInput = document.querySelector('input[type="text"]');
const apiKeyInput = document.querySelector('input[type="password"]');
const modelInput = document.querySelectorAll('input[type="text"]')[1];

const config = Config.load();

providerInput.value = config.provider;
baseUrlInput.value = config.baseURL;
apiKeyInput.value = config.apiKey;
modelInput.value = config.model;

startChatButton.addEventListener("click",()=>{

    alert("聊天页面开发中 🌊");

});

settingsButton.addEventListener("click",()=>{

    overlay.classList.add("show");

});

closeButton.addEventListener("click",()=>{

    overlay.classList.remove("show");

});

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        overlay.classList.remove("show");

    }

});

saveButton.addEventListener("click",()=>{

    Config.save({

        provider:providerInput.value,

        baseURL:baseUrlInput.value,

        apiKey:apiKeyInput.value,

        model:modelInput.value

    });

    overlay.classList.remove("show");

    alert("保存成功 🌊");

});
