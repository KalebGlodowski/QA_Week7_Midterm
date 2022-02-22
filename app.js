var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

let counter = 10;

for (let i=0; i<list.length; i++) {

    let ele = document.createElement("div");
    let nameEle = document.createElement("h1");
    let soundEle = document.createElement("h3");
    nameEle.innerHTML="Name: "+list[i].name;
    soundEle.innerHTML="Sound: "+list[i].sound;
    ele.appendChild(nameEle);
    ele.appendChild(soundEle);

    if (list[i].sound > 5) {
        nameEle.style.color="blue";
        soundEle.style.color="blue";
    }

    document.body.appendChild(ele);
}

let buttonEle = document.createElement("div");
let buttonCounter = document.createElement("button");
let yayEle = document.createElement("h1");
buttonEle.appendChild(buttonCounter);
buttonEle.appendChild(yayEle);

buttonCounter.innerHTML="Click me. Counter: "+counter;

buttonCounter.addEventListener("click", function(){
    counter = counter+1;
    buttonCounter.innerHTML="Click me. Counter: "+counter;

    if (counter === 15) {
        yayEle.innerHTML="Yay! We hit 15 on the counter!";
    }
})

document.body.appendChild(buttonEle);