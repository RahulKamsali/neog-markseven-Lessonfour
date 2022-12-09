var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


var url = "https://api.funtranslations.com/translate/morse.json"

function getFullUrl(text){
    return url +"?text=" + text
}
function errorHandeler(error){
    console.log("error occured :", error)
    alert("some error occured try after sometime")
}

function clickEventHandler() {
    //outputDiv.innerText = "bbb " + txtInput.value
    var Inputtext = txtInput.value
    fetch(getFullUrl(Inputtext))
        .then(response => response.json())
        .then(json => 
            {var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
            })
        .catch(errorHandeler)
}

btnTranslate.addEventListener("click", clickEventHandler)
