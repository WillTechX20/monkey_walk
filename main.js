var i=null;
var j=0;
var currentMonkeyNum=1;
var monkeyImg=document.querySelector('img');
var button=document.querySelector('input');

function setMonkeyWidthAndHeight(monkeyNum){
    if(monkeyNum==1){
        monkeyImg.width=280;
        monkeyImg.height=232.5;
    }else if(monkeyNum==2){
        monkeyImg.width=259;
        monkeyImg.height=289;
    }else if(monkeyNum==3){
        monkeyImg.width=209;
        monkeyImg.height=291;
    }else if(monkeyNum==4){
        monkeyImg.width=273.5;
        monkeyImg.height=307;
    }else if(monkeyNum==5){
        monkeyImg.width=272;
        monkeyImg.height=299.5;
    }else if(monkeyNum==6){
        monkeyImg.width=254;
        monkeyImg.height=289.5;
    }else if(monkeyNum==7){
        monkeyImg.width=250;
        monkeyImg.height=288;
    }else if(monkeyNum==8){
        monkeyImg.width=208;
        monkeyImg.height=294.5;
    }else if(monkeyNum==9){
        monkeyImg.width=215.5;
        monkeyImg.height=306.5;
    }else{
        monkeyImg.width=247;
        monkeyImg.height=300;
    }
}

function nextMonkeyImg(){
    currentMonkeyNum=currentMonkeyNum+1;

    if(currentMonkeyNum>10){
        currentMonkeyNum=1;
    }

    monkeyImg.src='images/monkey_'+currentMonkeyNum+'.png';
    monkeyImg.alt='Monkey '+currentMonkeyNum;
    setMonkeyWidthAndHeight(currentMonkeyNum);
}

function stopMovingMonkey(){
    clearInterval(i);
    i=null;
    button.value='Start';
    button.onclick=startMovingMonkey;
}

function startMovingMonkey(){
    i=setInterval(nextMonkeyImg, 600);
    button.value='Stop';
    button.onclick=stopMovingMonkey;
}