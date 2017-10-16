init(50,"box",window.innerWidth*0.98,window.innerHeight*0.98,main);
var loadLayer, backLayer, gamepicture, titleLayer, resultLayer, clickLayer;
var imglist,backLayer,sound,soundLayer,loadingLayer; 
var imgList;
var getHb;
var arr;
var playing = false;
var timeCount=0,sec=0,min=0,minTxt,secTxt;
var stopCount;
var position;
var tzaBitmap,tzbBitmap,tzcBitmap;
var difficulty = 1;
var imgData = new Array({name:"hannuota",path:"./img/hannuota.jpg"},
    {name:"introduce",path:"./img/introduce.png"},
    {name:"start",path:"./img/start.png"},
    {name:"start_after",path:"./img/start_after.png"},
    {name:"introduction",path:"./img/introduction.png"},
    {name:"introduction_after",path:"./img/introduction_after.png"},
    {name:"back",path:"./img/back.png"},
    {name:"back_after",path:"./img/back_after.png"},
    {name:"home",path:"./img/home.png"},
    {name:"home_after",path:"./img/home_after.png"},
    {name:"beijing",path:"./img/beijing.jpg"},
    {name:"柱台1",path:"./img/柱台1.png"},
    {name:"柱台2",path:"./img/柱台2.png"},
    {name:"柱台3",path:"./img/柱台3.png"},
    {name:"1",path:"./img/1.png"},
    {name:"2",path:"./img/2.png"},
    {name:"3",path:"./img/3.png"},
    {name:"4",path:"./img/4.png"},
    {name:"5",path:"./img/5.png"},
    {name:"6",path:"./img/6.png"},
    {name:"7",path:"./img/7.png"},
    {name:"c1",path:"./img/c1.png"},
    {name:"c1_after",path:"./img/c1_after.png"},
    {name:"c2",path:"./img/c2.png"},
    {name:"c2_after",path:"./img/c2_after.png"},
    {name:"c3",path:"./img/c3.png"},
    {name:"c3_after",path:"./img/c3_after.png"},
    {name:"stop",path:"./img/暂停.png"},
    {name:"begin",path:"./img/开始.png"},
    {name:"choose",path:"./img/choose.png"},
    {name:"choose_after",path:"./img/choose_after.png"},
    {name:"musicbegin",path:"./img/musicbegin.png"},
    {name:"musicstop",path:"./img/musicstop.png"}
    );
var showList = new Array();
function main(){
    backLayer = new LSprite();
    addChild(backLayer);
    loadingLayer = new LoadingSample1();
    backLayer.addChild(loadingLayer);
    position = {
        col1:LGlobal.width*0.14,
        col2:LGlobal.width*0.40,
        col3:LGlobal.width*0.66,
        row0:LGlobal.height*0.82,
        row1:LGlobal.height*0.74,
        row2:LGlobal.height*0.66,
        row3:LGlobal.height*0.58,
        row4:LGlobal.height*0.50,
        row5:LGlobal.height*0.42,
        row6:LGlobal.height*0.34,
        row7:LGlobal.height*0.26,
    }
    LLoadManage.load(
        imgData,
        function(progress) {
            loadingLayer.setProgress(progress);
        },
        function(result) {
            imglist=result;
            backLayer.removeChild(loadingLayer);
            loadingLayer = null;
            gameStart();
        }
    );
}
/*开始界面*/

function gameStart() {
    
    var titleBitmap = new LBitmap(new LBitmapData(imglist['hannuota']));
    titleBitmap.x = 0;
    titleBitmap.y = 0;
    titleBitmap.scaleX =0.8;
    titleBitmap.scaleY =0.8;
    backLayer.addChild(titleBitmap);

    var button01 = createButton("start","start_after");
    button01.x = LGlobal.width*0.4 - button01.getWidth()*1.5;
    button01.y =  LGlobal.height*0.8;
    backLayer.addChild(button01);
    button01.addEventListener(LMouseEvent.MOUSE_UP,start);

    
    var button02 = createButton("introduction","introduction_after");
    button02.x =  LGlobal.width*0.4;
    button02.y = LGlobal.height*0.8;
    backLayer.addChild(button02);
    button02.addEventListener(LMouseEvent.MOUSE_UP,introduce);
    
    var button03 = createButton("choose","choose_after");
    button03.x = LGlobal.width*0.4 + button03.getWidth()*1.5;
    button03.y = LGlobal.height*0.8;
    backLayer.addChild(button03);
    button03.addEventListener(LMouseEvent.MOUSE_UP,gochoose);
}

function gochoose(){
    backLayer.removeAllChild();
    initdifficulty();
}

function initdifficulty(){
    var titleBitmap = new LBitmap(new LBitmapData(imglist['beijing']));
    titleBitmap.x = 0;
    titleBitmap.y = 0;
    titleBitmap.scaleX =0.8;
    titleBitmap.scaleY =0.8;
    backLayer.addChild(titleBitmap);

    var button06 = createButton("c1","c1_after");
    button06.x = LGlobal.width*0.05 + button06.getWidth();
    button06.y = LGlobal.height*0.2;
    backLayer.addChild(button06);
    button06.addEventListener(LMouseEvent.MOUSE_UP,function(event) {
        difficulty = 1;
        console.log(difficulty);
        goback();
    });

    var button07 = createButton("c2","c2_after");
    button07.x = LGlobal.width*0.25 + button07.getWidth();
    button07.y = LGlobal.height*0.2;
    backLayer.addChild(button07);
    button07.addEventListener(LMouseEvent.MOUSE_UP,function(event) {
        difficulty = 2;
        console.log(difficulty);
        goback();
    });

    var button08 = createButton("c3","c3_after");
    button08.x = LGlobal.width*0.45 + button08.getWidth();
    button08.y = LGlobal.height*0.2;
    backLayer.addChild(button08);
    button08.addEventListener(LMouseEvent.MOUSE_UP,function(event) {
        difficulty = 3;
        console.log(difficulty);
        goback();
    });
}

function createButton(value1,value2) {
    var btn01Up = new LBitmap(new LBitmapData(imglist[value1]));
    var btn01Over = new LBitmap(new LBitmapData(imglist[value2]));
    var btn01 = new LButton(btn01Up,btn01Over);
    btn01.name = value1;
    return btn01;

}

/*跳转游戏界面*/


function start(){
    backLayer.removeAllChild();
    initGameLayer();
    
}


function gohome(){
    backLayer.removeAllChild();
    sound.stop();
    sound=null;
    sec=0;                                               
    gameStart();
}

function goback(){
        backLayer.removeAllChild();
        gameStart();

}


/*介绍界面*/


function introduce(){
    backLayer.removeAllChild();
    back();
    
}
function back() {

    selfBitmap = new LBitmap(new LBitmapData(imglist["introduce"]));
    selfBitmap.x = 0;
    selfBitmap.y = 0;
    selfBitmap.scaleX=0.9;
    selfBitmap.scaleY=0.9;
    backLayer.addChild(selfBitmap);
    


    var button03 = createButton("back","back_after");
    button03.x = LGlobal.width*0.4;
    button03.y =  LGlobal.height*0.8;
    backLayer.addChild(button03);
    button03.addEventListener(LMouseEvent.MOUSE_UP,goback);
}


/*标题部分*/
   
function initTitleLayer(){
    selfTextAll = new LTextField();
    selfTextAll.text="吃货版-汉诺塔";
    selfTextAll.size= 48;
    selfTextAll.weight ="bolder";
    selfTextAll.x = LGlobal.width*0.4;
    selfTextAll.y = LGlobal.height*0.05;
    backLayer.addChild(selfTextAll);
}




/*音乐部分*/

function prepare(){
        sound = new LSound();   
        var url = "./music/Jenő Jandó - I. Allegro.";
        sound.load(url+"mp3,"+url+"ogg,"+url+"wav");
        sound.addEventListener(LEvent.COMPLETE,loadOver);
        initSoundLayer();
}

function initSoundLayer(){
    soundLayer= new LSprite();

    backLayer.addChild(soundLayer);
    var soundBitmap = new LBitmap(new LBitmapData(imglist["musicbegin"]));
    soundBitmap.x=LGlobal.width*0.9;
    soundBitmap.y=LGlobal.height*0.1;
    soundLayer.addChild(soundBitmap);
    soundLayer.addEventListener(LMouseEvent.MOUSE_UP,silence)


}
function loadOver (e) {
    sound.play();
}

function silence(event){
    if(sound.playing){
        sound.stop();
        soundLayer.removeAllChild();
        var soundBitmap = new LBitmap(new LBitmapData(imglist["musicstop"]));
        soundBitmap.x=LGlobal.width*0.9;
        soundBitmap.y=LGlobal.height*0.1;
        soundLayer.addChild(soundBitmap);

    }
    else{
        sound.play();
        soundLayer.removeAllChild();
        var soundBitmap = new LBitmap(new LBitmapData(imglist["musicbegin"]));
        soundBitmap.x=LGlobal.width*0.9;
        soundBitmap.y=LGlobal.height*0.1;
        soundLayer.addChild(soundBitmap);
    }
}

/*计时器*/

function initResultLayer() {
  resultLayer=new LSprite();
   resultLayer.graphics.drawRect(4,'#ff8800',[0,0,100,60],true,'#ffffff');

    
    
    timeText = new LTextField();
    timeText.text="时间：00:00";
    timeText.weight ="bolder";
    timeText.x = 10;
    timeText.y = 22;
   resultLayer.addChild(timeText);

    buttonCtl = new LSprite();
   buttonCtl.x =5;
   buttonCtl.y =5;
    resultLayer.addChild(buttonCtl);

   

    resultLayer.x = LGlobal.width*0.8;
    resultLayer.y = LGlobal.height*0.1;
    backLayer.addChild(resultLayer);

    resultLayer.addEventListener(LEvent.ENTER_FRAME,onframe);


}

function getButton(value) {     
    var btnUp = new LBitmap(new LBitmapData(imglist[value]));
    btnUp.scaleX=0.5;
    btnUp.scaleY=0.5;
    var btnOver = new LBitmap(new LBitmapData(imglist[value]));
    btnOver.scaleX=0.5;
    btnOver.scaleY=0.5;
    btnOver.x=2;
    btnOver.y=2;
    var btn = new LButton(btnUp,btnOver);
    btn.name = value;
    return btn;
}

function onframe(event,display){
        timeCount++;
        if(timeCount>=20){
            sec ++;            
            timeCount=0;
        }
        if(sec>=60){
            min++;
            sec=0;            
        }
  
  if(sec<10){
    secTxt="0"+sec;
  }
  else
    {secTxt=sec;
    }

  if(min<10){
    minTxt="0"+min;  
}
else{   minTxt=min;}
    
        timeText.text="时间："+minTxt+":"+secTxt;
}




/*简单模式游戏界面*/

function initGameLayer() {

    
    var titleBitmap = new LBitmap(new LBitmapData(imglist['beijing']));
    titleBitmap.x = (LGlobal.width - titleBitmap.width)/2;
    titleBitmap.y = 10;
    backLayer.addChild(titleBitmap);
    
    var button04 = createButton("home","home_after");
    button04.x = LGlobal.width*0.45;
    button04.y = LGlobal.height*0.88;
    backLayer.addChild(button04);
    button04.addEventListener(LMouseEvent.MOUSE_UP,gohome);


    initResultLayer();   //计时器
    initTitleLayer();    //标题
    initGamepicture();   //简单模式界面
    prepare();           //音乐部分
    setHbArr();          //初始化数组

}

function initGamepicture(){

    
    tzaBitmap = new LBitmap(new LBitmapData(imglist["柱台1"]));      
    tzaBitmap.scaleX=0.8;
    tzaBitmap.scaleY=0.8;
    tzaBitmap.x = LGlobal.width*0.13;
    tzaBitmap.y = position.row1 - tzaBitmap.getHeight()+90; 
    backLayer.addChild(tzaBitmap);
    
    tzbBitmap = new LBitmap(new LBitmapData(imglist["柱台2"]));
    tzbBitmap.scaleX=0.8;
    tzbBitmap.scaleY=0.8;
    tzbBitmap.x = LGlobal.width*0.39;
    tzbBitmap.y = position.row1 - tzbBitmap.getHeight()+90;
    backLayer.addChild(tzbBitmap);

    tzcBitmap = new LBitmap(new LBitmapData(imglist["柱台3"]));    
    tzcBitmap.scaleX=0.8;
    tzcBitmap.scaleY=0.8;
    tzcBitmap.x = LGlobal.width*0.65;
    tzcBitmap.y = position.row1 - tzcBitmap.getHeight()+90;
    backLayer.addChild(tzcBitmap);  

    hbaBitmapLayer = new LSprite();
    hbaBitmapLayer.name = 1;
    hbaBitmapLayer.x = position.col1;
    hbaBitmapLayer.y = position.row1;    
    hbaBitmap = new LBitmap(new LBitmapData(imglist["1"]));
    hbaBitmapLayer.addChild(hbaBitmap);
    hbaBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN,pickHb);
    
    hbbBitmapLayer = new LSprite();
    hbbBitmapLayer.name = 2;
    hbbBitmapLayer.x = position.col1;
    hbbBitmapLayer.y = position.row2;    
    hbbBitmap = new LBitmap(new LBitmapData(imglist["2"]));
    hbbBitmapLayer.addChild(hbbBitmap);
    hbbBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN,pickHb);
    
    hbcBitmapLayer = new LSprite();
    hbcBitmapLayer.name = 3;
    hbcBitmapLayer.x = position.col1;
    hbcBitmapLayer.y = position.row3;    
    hbcBitmap = new LBitmap(new LBitmapData(imglist["3"]));
    hbcBitmapLayer.addChild(hbcBitmap);
    hbcBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN, pickHb);
    
    hbdBitmapLayer = new LSprite();
    hbdBitmapLayer.name = 4;
    hbdBitmapLayer.x = position.col1;
    hbdBitmapLayer.y = position.row4;    
    hbdBitmap = new LBitmap(new LBitmapData(imglist["4"]));
    hbdBitmapLayer.addChild(hbdBitmap);
    hbdBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN, pickHb);
    
    hbeBitmapLayer = new LSprite();
    hbeBitmapLayer.name = 5;
    hbeBitmapLayer.x = position.col1;
    hbeBitmapLayer.y = position.row5;    
    hbeBitmap = new LBitmap(new LBitmapData(imglist["5"]));
    hbeBitmapLayer.addChild(hbeBitmap);
    hbeBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN, pickHb);
    
    hbfBitmapLayer = new LSprite();
    hbfBitmapLayer.name = 6;
    hbfBitmapLayer.x = position.col1;
    hbfBitmapLayer.y = position.row6;    
    hbfBitmap = new LBitmap(new LBitmapData(imglist["6"]));
    hbfBitmapLayer.addChild(hbfBitmap);
    hbfBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN, pickHb);
    
    hbgBitmapLayer = new LSprite();
    hbgBitmapLayer.name = 7;
    hbgBitmapLayer.x = position.col1;
    hbgBitmapLayer.y = position.row7;    
    hbgBitmap = new LBitmap(new LBitmapData(imglist["7"]));
    hbgBitmapLayer.addChild(hbgBitmap);
    hbgBitmapLayer.addEventListener(LMouseEvent.MOUSE_DOWN, pickHb);
    
    switch(difficulty){
        case 1:
            backLayer.addChild(hbaBitmapLayer);
            backLayer.addChild(hbbBitmapLayer);
            backLayer.addChild(hbcBitmapLayer);
            break;
        case 2:
            backLayer.addChild(hbaBitmapLayer);
            backLayer.addChild(hbbBitmapLayer);
            backLayer.addChild(hbcBitmapLayer);
            backLayer.addChild(hbdBitmapLayer);
            backLayer.addChild(hbeBitmapLayer);
            break;
        case 3:
            backLayer.addChild(hbaBitmapLayer);
            backLayer.addChild(hbbBitmapLayer);
            backLayer.addChild(hbcBitmapLayer);
            backLayer.addChild(hbdBitmapLayer);
            backLayer.addChild(hbeBitmapLayer);
            backLayer.addChild(hbfBitmapLayer);
            backLayer.addChild(hbgBitmapLayer);
            break;
        default:
            console.log("initGamePicture Error");
            break;
    }
  
    
    
}

function pickHb(event){

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(event.currentTarget.name == arr[i][j]){
                if((difficulty==1&&j==2)||(difficulty==2&&j==4)||(difficulty==3&&j==6)){
                    mousex = event.offsetX;
                    mousey = event.offsetY;
                    event.currentTarget.addEventListener(LMouseEvent.MOUSE_MOVE, moveHb);
                    event.currentTarget.addEventListener(LMouseEvent.MOUSE_UP, putDown);
                }
                else if(arr[i][j+1] == 0){
                        mousex = event.offsetX;
                        mousey = event.offsetY;
                        event.currentTarget.addEventListener(LMouseEvent.MOUSE_MOVE, moveHb);
                        event.currentTarget.addEventListener(LMouseEvent.MOUSE_UP, putDown);
                    }
            }
        }
    }
}



function setHbArr(){
    switch(difficulty){
        case 1:
            arr = [[1,2,3],[0,0,0],[0,0,0]];
            break;
        case 2:
            arr = [[1,2,3,4,5],[0,0,0,0,0],[0,0,0,0,0]];
            break;
        case 3:
            arr = [[1,2,3,4,5,6,7],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
            break;
        default:
            console.log("setHbArr Error");
            break;
    }    
}


function moveHb(event){
    event.currentTarget.x= event.offsetX - mousex+event.currentTarget.x;
    event.currentTarget.y = event.offsetY - mousey+event.currentTarget.y;
    mousex = event.offsetX ;
    mousey = event.offsetY ;

}


function putDown(event){
    var putBack = true;
    if(event.currentTarget.x <= ((tzbBitmap.x+tzaBitmap.x)/2)){
        for(var i = 0; i < arr[0].length; i++){
            if(arr[0][i] == 0){
                if(i == 0){
                    for(var n = 0; n<arr.length; n++){
                        for( var m = 0; m<arr[n].length; m++){
                            if(arr[n][m] == event.currentTarget.name){
                                arr[n][m]=0;
                                break;
                            }
                        }
                    } 
                    arr[0][0] = event.currentTarget.name;
                    event.currentTarget.x = position.col1;
                    event.currentTarget.y = position.row1;
                    putBack=false;
                    break;
                }
                else{
                    if(arr[0][i-1] < event.currentTarget.name){
                        for(var n = 0; n<arr.length; n++){
                            for( var m = 0; m<arr[n].length; m++){
                                if(arr[n][m] == event.currentTarget.name){
                                    arr[n][m]=0;
                                    break;
                                }
                            }
                        } 
                        arr[0][i] = event.currentTarget.name;
                        event.currentTarget.x = position.col1;                        
                        event.currentTarget.y= getRowPosition(i);
                        putBack=false;
                        break;
                    }
                    else{
                        putBack=true;
                        break;
                    }
                }
            }
        }
        if(putBack){
            for(var i = 0; i<arr.length; i++){
                for( var j = 0; j<arr[i].length; j++){
                    if(arr[i][j] == event.currentTarget.name){
                        event.currentTarget.x =  position.col1;
                        event.currentTarget.y = getRowPosition(j);
                        break;
                    }
                }
            }
        }         
    }
    else if(event.currentTarget.x >= ((tzcBitmap.x+tzbBitmap.x)/2)){
            for(var i = 0; i < arr[2].length; i++){
                if(arr[2][i] == 0){
                    if(i == 0){
                        for(var n = 0; n<arr.length; n++){
                                for( var m = 0; m<arr[n].length; m++){
                                    if(arr[n][m] == event.currentTarget.name){
                                        arr[n][m]=0;
                                        break;
                                    }
                                }
                            } 
                        arr[2][0] = event.currentTarget.name;
                        event.currentTarget.x = position.col3;
                        event.currentTarget.y = position.row1;
                        putBack=false;
                        break;
                    }
                    else{
                        if(arr[2][i-1] < event.currentTarget.name){
                            for(var n = 0; n<arr.length; n++){
                                for( var m = 0; m<arr[n].length; m++){
                                    if(arr[n][m] == event.currentTarget.name){
                                        arr[n][m]=0;
                                        break;
                                    }
                                }
                            } 
                            arr[2][i] = event.currentTarget.name;
                            event.currentTarget.x = position.col3;
                            event.currentTarget.y = getRowPosition(i);
                            putBack=false;
                            break;
                        }
                        else{
                            putBack=true;
                            break;
                        }
                    }
                }
            }
            if(putBack){
                for(var i = 0; i<arr.length; i++){
                    for( var j = 0; j<arr[i].length; j++){
                        if(arr[i][j] == event.currentTarget.name){
                            event.currentTarget.x = getColPosition(i);
                            event.currentTarget.y = getRowPosition(j);
                            break;
                        }
                    }
                } 
            }
        }
    else{
            for(var i = 0; i < arr[1].length; i++){
                if(arr[1][i] == 0){
                    if(i == 0){
                        for(var n = 0; n<arr.length; n++){
                                for( var m = 0; m<arr[n].length; m++){
                                    if(arr[n][m] == event.currentTarget.name){
                                        arr[n][m]=0;
                                        break;
                                    }
                                }
                            } 
                        arr[1][0] = event.currentTarget.name;
                        event.currentTarget.x = position.col2;
                        event.currentTarget.y = position.row1;
                        putBack=false;                         
                        break;
                    }
                    else{
                        if(arr[1][i-1] < event.currentTarget.name){
                            for(var n = 0; n<arr.length; n++){
                                for( var m = 0; m<arr[n].length; m++){
                                    if(arr[n][m] == event.currentTarget.name){
                                        arr[n][m]=0;
                                        break;
                                    }
                                }
                            } 

                            arr[1][i] = event.currentTarget.name;
                            event.currentTarget.x = position.col2;
                            event.currentTarget.y = getRowPosition(i);
                            putBack=false;

                            break;
                        }
                        else{
                            putBack=true;
                            break;
                        }
                    }
                }
            }
            if(putBack){
                for(var i = 0; i<arr.length; i++){
                    for( var j = 0; j<arr[i].length; j++){
                        if(arr[i][j] == event.currentTarget.name){
                            event.currentTarget.x =  getColPosition(i);
                            event.currentTarget.y = getRowPosition(j);
                            break;
                        }
                    }
                }
            }
        }
    event.currentTarget.removeEventListener(LMouseEvent.MOUSE_MOVE, moveHb);
    event.currentTarget.removeEventListener(LMouseEvent.MOUSE_UP, putDown);
    isGameover();
}














function isGameover(){
    switch(difficulty){
        case 1:
            if(arr.toString()  ==  [[0,0,0],[0,0,0],[1,2,3]].toString()){
                gameOver();
            }
            break;
        case 2:
            if(arr.toString()  ==  [[0,0,0,0,0],[0,0,0,0,0],[1,2,3,4,5]].toString()){
                gameOver();
            }
            break;
        case 3:
            if(arr.toString()  ==  [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,2,3,4,5,6,7]].toString()){
                gameOver();
            }
            break;
        default:
            console.log("isGameover Error");
            break;
    }
    
}


function gameOver(){

    backLayer.removeAllChild();
    var endLayer = new LSprite();
    backLayer.addChild(endLayer);
    var overBitmap = new LBitmap(new LBitmapData(imglist['beijing']));
    backLayer.addChild(overBitmap);
        
    var button05 = createButton("home","home_after");
        button05.x = LGlobal.width*0.5;
        button05.y = LGlobal.height*0.8;
        backLayer.addChild(button05);
        button05.addEventListener(LMouseEvent.MOUSE_UP,gohome);

    var timeText = new LTextField();
    timeText.text="Congratulation！你的大脑迟钝程度为："+minTxt+":"+secTxt;
    timeText.x=LGlobal.width*0.2;
    timeText.y=LGlobal.height*0.3;
     timeText.weight ="bolder";
    timeText.size=48;

   backLayer.addChild(timeText);

}

function getRowPosition(i){
    switch(i){
        case 0: return position.row1;
            break;
        case 1: return position.row2;
            break;
        case 2: return position.row3;
            break;
        case 3: return position.row4;
            break;
        case 4: return position.row5;
            break;
        case 5: return position.row6;
            break;
        case 6: return position.row7;
            break;
        default:
            console.log("ERROR ROW");
            return 0;
            break;
    }
}

function getColPosition(i){
    switch(i){
        case 0: return position.col1;
            break;
        case 1: return position.col2;
            break;
        case 2: return position.col3;
        default:
            console.log("ERROR COL");
            return 0;
            break;
    }
}
