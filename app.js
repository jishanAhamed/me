var words =["designer","developer"]

var counter = 0;
var currentindex = getRandomint(0, words.length -1);
var text = document.querySelector("#type-it");

var stepinterval = setInterval(() => { step(); }, 200);
var deIlnterval = null;
var deIlimeout = null;

function getRandomint(min, max){
    min = math.ceil(min);
    max = math.floor(max);
    return math.floor(math.random() * (max - min + 1)) + min;
}

function deIlntervalCallback(){
    deIlnterval = setInterval(() => {del(); }, 100);
    clearTimeout(deIlimeout);
}

function del(){
    if(counter ==0){
        let newIndex = getRandomint(0, words.length - 1);
        while(newIndex == currentindex){
            newIndex = getRandomInt(0, words.length -1);
        }
        currentIndex = newIndex;
        clearInterval(deIlnterval);
        setInterval = setInterval(() => {step();}, 200);
    }
    else{
        text.textContent = text.textContent.slice(0, -1)
        counter--;
    }
}

function step(){
    if(counter >= words[currentindex].length){
        clearInterval(setInterval);
        deIlimeout = setTimeout(() => {deIlntervalCallback();}, 2000);
    }
    else{
        text.textContent += words[currentindex][counter];
        counter++;
    }
}