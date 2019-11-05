document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec')
    .addEventListener('click', btnChannel1Click)
document.querySelector('#channel1Play')
    .addEventListener('click', playChannel1)
document.querySelector('#channel2Rec')
    .addEventListener('click', btnChannel2Click)
document.querySelector('#channel2Play')
    .addEventListener('click', playChannel2)
document.querySelector('#channel3Rec')
    .addEventListener('click', btnChannel3Click)
document.querySelector('#channel3Play')
    .addEventListener('click', playChannel3)
document.querySelector('#channel4Rec')
    .addEventListener('click', btnChannel4Click)
document.querySelector('#channel4Play')
    .addEventListener('click', playChannel4)
document.querySelector('#channel5Play')
    .addEventListener('click', ()=>{playChannel1(), playChannel2(), playChannel3(),playChannel4()})
document.addEventListener('keydown', glow)
document.addEventListener('keyup' ,nglow)

let channel1Start
let channel2Start
let channel3Start
let channel4Start

const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []

const sounds = {
    KeyQ: '#boom',
    KeyW: '#clap',
    KeyE: '#hihat',
    KeyD: '#ride',
    KeyS: '#tom',
    KeyC: '#openhat',
    KeyA: '#kick',
    KeyZ: '#snare',
    KeyX: '#tink'
}

let path;

function glow(e){
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    key.classList.add('playing')
}

function nglow(e){
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if(!key == null)
    key.classList.remove('playing')
    else
    console.log('')
}


function onKeyPress(e) {
    playSound(sounds[e.code])
    if(path == 1)
        {
        const time = Date.now() - channel1Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel1.push(sound)
        }
    else if(path == 2)
        {
        const time = Date.now() - channel2Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel2.push(sound)
        }  
    else if(path == 3)
        {
        const time = Date.now() - channel3Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel3.push(sound)
        }  
    else if(path == 4)
        {
        const time = Date.now() - channel4Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel4.push(sound)
        }
        
}

function playSound(id){
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0;
    audioTag.play()
}

function btnChannel1Click(){
    channel1Start = Date.now()
    path = 1;
}
function btnChannel2Click(){
    channel2Start = Date.now()
    path = 2;
}
function btnChannel3Click(){
    channel3Start = Date.now()
    path = 3;
}
function btnChannel4Click(){
    channel4Start = Date.now()
    path = 4;
}

function playChannel1(){
    channel1.forEach((el) =>{
        setTimeout(()=>{
            playSound(sounds[el.sound])
        }, el.time)
    })
}
function playChannel2(){
    channel2.forEach((el) =>{
        setTimeout(()=>{
            playSound(sounds[el.sound])
        }, el.time)
    })
}
function playChannel3(){
    channel3.forEach((el) =>{
        setTimeout(()=>{
            playSound(sounds[el.sound])
        }, el.time)
    })
}
function playChannel4(){
    channel4.forEach((el) =>{
        setTimeout(()=>{
            playSound(sounds[el.sound])
        }, el.time)
    })
}