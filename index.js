let textarea = document.querySelector("textarea"),
voicelist = document.querySelector("select")
speechbtn = document.querySelector("button");
let synth =speechSynthesis; 

function voices(){
    for(let voice of synth.getVoices()){
        console.log(voice);
        // making by default google us english
        let selected = voice.name == "Google US English" ? "selected" : "" ;
        // for preparing the options
       var option = `<option value="${voice.name} ${selected} ">${voice.name} (${voice.lang})</option>`
        // // for adding the options in the select portion
        //selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
    
        voicelist.insertAdjacentHTML("beforeend",option);

    }
}
synth.addEventListener("voiceschanged",voices)
function texttospeech(value){
   let utterance = new SpeechSynthesisUtterance(value);
   speechSynthesis.speak(utterance);
}


speechbtn.addEventListener("click",e=>{
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
    e.preventDefault();
    if(textarea.value != ""){
        texttospeech(textarea.value);
    }
});
