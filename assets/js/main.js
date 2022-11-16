let messageOrCrypt = document.querySelector("#messageOrCrypt");
let encodeButtonEl = document.querySelector("#encodeButton");
let decodeButtonEl = document.querySelector("#decodeButton");
let resetButtonEl = document.querySelector("#resetButton");
let chooseEncode = document.querySelector("#encode");
const startCode = 97;
const endCode = 122;
const encryptedTextArray = [];
let inputText = document.querySelector("#inputText").value;

function setEncodeOrDecode() {
    chooseEncode = document.querySelector("#encode").checked;
    if (chooseEncode === false) {
        messageOrCrypt.innerHTML = "What crypt would you like to decode?";
        encodeButtonEl.classList.add("hiddenButton")
        decodeButtonEl.classList.remove("hiddenButton")
    } else {
        messageOrCrypt.innerHTML = "What is your message for encryption?";
        encodeButtonEl.classList.remove("hiddenButton")
        decodeButtonEl.classList.add("hiddenButton")
    }
}

function encode(inputText, inputKey) {
    for (let inputCharacter of inputText) {
        console.log(inputCharacter)

        const inputCharacterCode = inputCharacter.charCodeAt(0);

        let encryptedCharacterCode;
        if (inputCharacterCode + inputKey > endCode) {
            const difference = (inputCharacterCode + inputKey) - endCode;
            encryptedCharacterCode = startCode + difference - 1;
        } else {
            encryptedCharacterCode = inputCharacterCode + inputKey;
        }

        console.log(encryptedCharacterCode)

        const encryptedCharacter = String.fromCharCode(encryptedCharacterCode);
        encryptedTextArray.push(encryptedCharacter);
    }

    console.log(encryptedTextArray)

    return encryptedTextArray.join("").toUpperCase();

}

function decode(inputText, inputKey) {
    for (let inputCharacter of inputText.toLowerCase()) {
        const inputCharacterCode = inputCharacter.charCodeAt(0);

        let encryptedCharacterCode;
        if (inputCharacterCode - inputKey < startCode) {
            const difference = (inputCharacterCode - inputKey) - endCode;
            encryptedCharacterCode = startCode + difference - 1;
        } else {
            encryptedCharacterCode = inputCharacterCode - inputKey;
        }

        console.log(encryptedCharacterCode)

        const encryptedCharacter = String.fromCharCode(encryptedCharacterCode);
        encryptedTextArray.push(encryptedCharacter);
    }

    console.log(encryptedTextArray)

    return encryptedTextArray.join("");
}

encodeButtonEl.addEventListener("click", (event) => {
    let inputText = document.querySelector("#inputText").value;
    let inputKey = Number(document.querySelector("#inputKey").value);
    let encrypted = encode(inputText, inputKey);

    document.querySelector("#secretText").textContent = encrypted;
})

decodeButtonEl.addEventListener("click", (event) => {
    let inputText = document.querySelector("#inputText").value;
    let inputKey = Number(document.querySelector("#inputKey").value);
    let decrypted = decode(inputText, inputKey);

    document.querySelector("#secretText").textContent = decrypted;
})

resetButtonEl.addEventListener("click", (event) => {
    let inputTextEl = document.querySelector("#inputText");
    let inputKeyEl = document.querySelector("#inputKey");
    let inputEncodeOrDecode = document.querySelector("#encode");

    inputTextEl.value = "";
    inputKeyEl.value = "";
    inputEncodeOrDecode.checked = true;
    document.querySelector("#secretText").textContent = "";

})

