var btnTranslate = document.querySelector("#btn-trans");
var textInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
var serverURL= "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslationURL(input){
    return serverURL + "?"+ "text=" + input;
  }

  function errorHandler(error){
    console.log("Error has occured!", error);
    alert("there has been an error!!!");
  }

  function clickEventHandler()
  {
    var inputText = textInput.value;
    console.log(inputText);
    if(inputText==0){
        alert("please write a text");
    }
   else{
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {var translatedText= json.contents.translated;
        outputDiv.innerText = translatedText;})
        .catch(errorHandler);}
    }
btnTranslate.addEventListener("click",clickEventHandler)