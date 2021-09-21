
var whiteCheckerCanBeat=[];
var whiteCheckerCanStep=[];
var blackCheckerCanBeat=[];
var whiteCheckerCanStep=[];
let nullCheckers=[]
//var selectedChecker; //1st version of programm
var selectedChecker=[];
var blackCheckersCanStep=[];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$(document).ready( function(){
    $(`#board`).html(renderBoard());
    //renderCheckers();
    renderCheckers1();
})
function renderCells(row,col){
    //if((row%2==col%2)){ //for 1st version
    if(!(row%2==col%2)){
    return `<div id="cell-${row}-${col}" class="cell black"></div>`;}
    else{
    return `<div id="cell-${row}-${col}" class="cell white"></div>`;}
}
//1st version
/*
function renderBoard(){
    return `${renderRow(1)}${renderRow(2)}${renderRow(3)}${renderRow(4)}${renderRow(5)}${renderRow(6)}${renderRow(7)}${renderRow(8)}`;
}
function renderRow(row){
    return `<div class='row' id='row-${row}'>${renderCells(row,1)}${renderCells(row,2)}${renderCells(row,3)}${renderCells(row,4)}${renderCells(row,5)}${renderCells(row,6)}${renderCells(row,7)}${renderCells(row,8)}</div>`;
}
var checkers=[
    {row:1, col:2,color:'black'},
    {row:1, col:4,color:'black'},
    {row:1, col:6,color:'black'},
    {row:1, col:8,color:'black'},
    {row:2, col:1,color:'black'},
    {row:2, col:3,color:'black'},
    {row:2, col:5,color:'black'},
    {row:2, col:7,color:'black'},
    {row:3, col:2,color:'black'},
    {row:3, col:4,color:'black'},
    {row:3, col:6,color:'black'},
    {row:3, col:8,color:'black'},

    {row:6, col:1,color:'white'},
    {row:6, col:3,color:'white'},
    {row:6, col:5,color:'white'},
    {row:6, col:7,color:'white'},
    {row:7, col:2,color:'white'},
    {row:7, col:4,color:'white'},
    {row:7, col:6,color:'white'},
    {row:7, col:8,color:'white'},
    {row:8, col:1,color:'white'},
    {row:8, col:3,color:'white'},
    {row:8, col:5,color:'white'},
    {row:8, col:7,color:'white'},
]
function renderChecker(color,ind){
    if(checkers[ind].isKing){
        return `<div class="checker ${color}-checker" ind="${ind}"><i class="far fa-star fa-2x"></i></div>`;
    }
    return `<div class="checker ${color}-checker" ind="${ind}"></div>`;
}
function renderCheckers(){
    $(`.cell.white`).html('');
    $(`.cell.white`).click(dropChecker);
    for(let i=0;i<checkers.length;++i){
        let checker=checkers[i];
        $(`#cell-${checker.row}-${checker.col}`).unbind('click');
        $(`#cell-${checker.row}-${checker.col}`).html(renderChecker(checker.color,i));
    }
    $(`.checker`).click(selectChecker);
}
var selectedChecker=undefined;
function selectChecker(){
    let tmp=$(this);
    if(tmp.hasClass("selected")){
        selectedChecker.row=undefined;
        selectedChecker.col=undefined;
        selectedChecker=undefined;
        renderCheckers();
        return;
    }
    $(`.selected`).removeClass("selected");
    var CheckerInd=tmp.attr("ind");
    selectedChecker=checkers[CheckerInd];
    tmp.addClass("selected");
}
function dropChecker(){
    //console.log("drop checker function");
    if(selectedChecker){
        let cell=$(this);
        let myArr=cell.attr('id').split('-');
        let idRow=myArr[1];
        let idCol=myArr[2];
        //console.log(myArr,idRow,idCol)
        //console.log(selectedChecker);
        selectedChecker.row=idRow;
        selectedChecker.col=idCol;
        if(selectedChecker.color=='white' && idRow==1) selectedChecker.isKing=true;
        if(selectedChecker.color=='black' && idRow==8) selectedChecker.isKing=true;
        renderCheckers();
        selectedChecker=undefined;
    }
}
//4600*/


//2nd version:
function renderBoard(){
    return `${renderRow(0)}${renderRow(1)}${renderRow(2)}${renderRow(3)}${renderRow(4)}${renderRow(5)}${renderRow(6)}${renderRow(7)}`;
}
function renderRow(row){
    return `<div class='row' id='row-${row}'>${renderCells(row,0)}${renderCells(row,1)}${renderCells(row,2)}${renderCells(row,3)}${renderCells(row,4)}${renderCells(row,5)}${renderCells(row,6)}${renderCells(row,7)}</div>`;
}

var checkers1=[
    [undefined,-1,undefined,-1,undefined,-1,undefined,-1],
    [-1,undefined,-1,undefined,-1,undefined,-1,undefined],
    [undefined,-1,undefined,-1,undefined,-1,undefined,-1],
    [null,undefined,null,undefined,null,undefined,null,undefined],
    [undefined,null,undefined,null,undefined,null,undefined,null],
    [1,undefined,1,undefined,1,undefined,1,undefined],
    [undefined,1,undefined,1,undefined,1,undefined,1],
    [1,undefined,1,undefined,1,undefined,1,undefined],
];

/*
checkers1=[
    [undefined,null,undefined,-1,undefined,-1,undefined,null],
    [-1,undefined,null,undefined,null,undefined,1,undefined],
    [undefined,null,undefined,null,undefined,null,undefined,-1],
    [null,undefined,null,undefined,2,undefined,null,undefined],
    [undefined,null,undefined,null,undefined,null,undefined,1],
    [null,undefined,null,undefined,1,undefined,1,undefined],
    [undefined,null,undefined,null,undefined,null,undefined,null],
    [2,undefined,1,undefined,1,undefined,1,undefined],
];
*/
function renderCheckers1(){
    //if((!$(`.white-checker`))){        //console.log("black-wins!")    }


    $(`.cell.black`).html('');
    $(`.cell.black`).unbind('click');
    $(`.cell.black`).click(dropChecker1);

    for(let i=0;i<8;++i){
        for(let j=0;j<8;++j){
            //let checker=checkers1[i][j];
            //$(`#cell-${Number(i)}-${Number(j)}`).unbind('click');
            //console.log("cell i j = ",i,j);
            //if(nullCheckers.includes([i,j]))continue
            if(checkers1[i][j]<0){
                $(`#cell-${Number(i)}-${Number(j)}`).unbind('click');
                $(`#cell-${Number(i)}-${Number(j)}`).html(renderChecker1('black',i,j));
            }
            else if(checkers1[i][j]>0){
                $(`#cell-${Number(i)}-${Number(j)}`).unbind('click');
                $(`#cell-${Number(i)}-${Number(j)}`).html(renderChecker1('white',i,j));
            }
        }
    }


    // if color checker !iscanbeat.lenght>0 @@ ( color-checker cant go) -> wins color

    whiteCheckerCanBeat=[]
    blackCheckerCanBeat=[]
    blackCheckersCanStep=[];
    let whiteCheckers=0;
    let blackCheckers=0;
    let blackDamka=0;
    let whiteDamka=0;
    for(let i=0;i<8;++i){
        for(let j=0;j<8;++j){
            //if(checkers1[i][j]==1||checkers1[i][j]==2) whiteCheckers+=1
            //if(checkers1[i][j]==-1||checkers1[i][j]==-2) blackCheckers+=1
            //(checkers1[i][j]==-2)blackDamka+=1
            //if(checkers1[i][j]==2)whiteDamka+=1
            if(isCanBeat(i,j,1)){
                whiteCheckerCanBeat.push(new Array(i,j))
                //console.log("white can jump");
            }
            if(isCanBeat(i,j,-1)){
                blackCheckerCanBeat.push(new Array(i,j))
                //console.log("black can jump");
            }
        }
    }
    $(`.checker`).click(selectChecker1);
nullCheckers=[]
}
function renderChecker1(color,i,j){
    if(checkers1[i][j]==2 || checkers1[i][j]==-2){
        return `<div class="checker ${color}-checker" i="${i}"  j="${j}"><i class="far fa-star fa-1x"></i></div>`;
    }
    return `<div class="checker ${color}-checker" id='checker-${i}-${j}' i="${i}"  j="${j}"></div>`;
}

var CheckerInd1;
var CheckerInd2;
function selectChecker1(){
//selectedChecker=[CheckerInd1][CheckerInd2];
    let tmp=$(this);
    CheckerInd1=tmp.attr("i");
    CheckerInd2=tmp.attr("j");

    console.log(CheckerInd1,CheckerInd2)
    console.log(iswhiteCheckerCanStep(CheckerInd1,CheckerInd2) , !(whiteCheckerCanBeat.length>0))
    //iswhiteCheckerCanStep()
    ////console.log(whiteCheckerCanBeat);
    ////console.log((whiteCheckerCanBeat.some))
    if(tmp.hasClass("white-checker") && (whiteCheckerCanBeat.length>0)&&(isCanBeat(CheckerInd1,CheckerInd2,1))){
        console.log('must beat')
        selectedChecker=[CheckerInd1,CheckerInd2];
        $(`.selected`).removeClass("selected");
        $(`.canDropChecker`).removeClass("canDropChecker");
        tmp.addClass("selected");
        /*if(isCanBeat(CheckerInd1,CheckerInd2,1)){ //is checker in battle, 1=white checker ,-1=black checker
            //console.log("can beat",isCanBeat(CheckerInd1,CheckerInd2,1));
        }*/
    }
    else if(tmp.hasClass("white-checker")&& !(whiteCheckerCanBeat.length>0) && !(isCanBeat(CheckerInd1,CheckerInd2,1)) && iswhiteCheckerCanStep(CheckerInd1,CheckerInd2)){
        console.log("must step")
        selectedChecker=[CheckerInd1,CheckerInd2];
        $(`.selected`).removeClass("selected");
        $(`.canDropChecker`).removeClass("canDropChecker");
        tmp.addClass("selected");
        /*if(isCanBeat(CheckerInd1,CheckerInd2,1)){ //is checker in battle, 1=white checker ,-1=black checker
            //console.log("can beat",isCanBeat(CheckerInd1,CheckerInd2,1));
        }*/

    }
    else if(tmp.hasClass("white-checker") && iswhiteCheckerCanStep(CheckerInd1,CheckerInd2) && !(whiteCheckerCanBeat.length>0)){
        selectedChecker=[CheckerInd1,CheckerInd2];
        $(`.selected`).removeClass("selected");
        $(`.canDropChecker`).removeClass("canDropChecker");
        tmp.addClass("selected");
    }
    return;
}


function isCanBeat(i,j,color){ //must return array of checkers that can beat or another function ???

    if(checkers1[i][j]==color){
        //left top -can beat
        if(checkers1.hasOwnProperty(i-1) && checkers1.hasOwnProperty(i-2)&&checkers1[i-1].hasOwnProperty(j-1)&&checkers1[i-2].hasOwnProperty(j-2)){
            if((checkers1[i-1][j-1]==(-1*color)||checkers1[i-1][j-1]==(-2*color)) && checkers1[i-2][j-2]==null) return new Array(i,j);
        }
        //right top -can beat
        if(checkers1.hasOwnProperty(i-1) && checkers1.hasOwnProperty(i-2)&&checkers1[i-1].hasOwnProperty(Number(j)+1)&&checkers1[i-2].hasOwnProperty(Number(j)+2)){
            if((checkers1[i-1][Number(j)+1]==(-1*color)||checkers1[i-1][Number(j)+1]==(-2*color)) && checkers1[i-2][Number(j)+2]==null) return new Array(i,j);
        }
        //left bottom -can beat
        if(checkers1.hasOwnProperty(Number(i)+1) && checkers1.hasOwnProperty(Number(i)+2)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)-1)&&checkers1[Number(i)+2].hasOwnProperty(Number(j)-2)){
            if((checkers1[Number(i)+1][Number(j)-1]==(-1*color)||checkers1[Number(i)+1][Number(j)-1]==(-2*color)) && checkers1[Number(i)+2][Number(j)-2]==null) return new Array(i,j);
        }
        //right bottom - can beat
        if(checkers1.hasOwnProperty(Number(i)+1) && checkers1.hasOwnProperty(Number(i)+2)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)+1)&&checkers1[Number(i)+2].hasOwnProperty(Number(j)+2)){
            if((checkers1[Number(i)+1][Number(j)+1]==(-1*color)||checkers1[Number(i)+1][Number(j)+1]==(-2*color)) && checkers1[Number(i)+2][Number(j)+2]==null) return new Array(i,j);
        }
    }

    if(checkers1[i][j]==color*2){
        let i1=i,i2=i,i3=i,i4=i;
        let j1=j,j2=j,j3=j,j4=j;
        while(checkers1.hasOwnProperty(i1-1) && checkers1.hasOwnProperty(i1-2)&&checkers1[i1-1].hasOwnProperty(j1-1)&&checkers1[i1-2].hasOwnProperty(j1-2)){
            if((checkers1[i1-1][j1-1]==(-1*color) || checkers1[i1-1][j1-1]==(-2*color))&&(checkers1[i1-2][j1-2]==(-1*color) || checkers1[i1-2][j1-2]==(-2*color)))break;
            if( (checkers1[i1-1][j1-1]==(-1*color) || checkers1[i1-1][j1-1]==(-2*color) ) && (checkers1[i1-2][j1-2]==null)){
                //console.log("to left-top can beat");
                return new Array(i,j);
            }

            i1-=1;
            j1-=1;

        }
        while(checkers1.hasOwnProperty(i2-1) && checkers1.hasOwnProperty(i2-2)&&checkers1[i2-1].hasOwnProperty(Number(j2)+1)&&checkers1[i2-2].hasOwnProperty(Number(j2)+2)){
            if((checkers1[i2-1][Number(j2)+1]==(-1*color) || checkers1[i2-1][Number(j2)+1]==(-2*color))&&(checkers1[i2-2][Number(j2)+2]==(-1*color) || checkers1[i2-2][Number(j2)+2]==(-2*color)))break;
            if( (checkers1[i2-1][Number(j2)+1]==(-1*color) || checkers1[i2-1][Number(j2)+1]==(-2*color) ) && (checkers1[i2-2][Number(j2)+2]==null)){
                //console.log("to right-top can beat");
                return new Array(i,j);
            }
            i2-=1;
            j2=Number(j2)+1;
        }
        while(checkers1.hasOwnProperty(Number(i3)+1) && checkers1.hasOwnProperty(Number(i3)+2)&&checkers1[Number(i3)+1].hasOwnProperty(Number(j3)-1)&&checkers1[Number(i3)+2].hasOwnProperty(Number(j3)-1)){
            if((checkers1[Number(i3)+1][Number(j3)-1]==(-1*color) || checkers1[Number(i3)+1][Number(j3)-1]==(-2*color))&&(checkers1[Number(i3)+2][Number(j3)-2]==(-1*color) || checkers1[Number(i3)+2][Number(j3)-2]==(-2*color)))break;
            if( (checkers1[Number(i3)+1][Number(j3)-1]==((-1)*color) || checkers1[Number(i3)+1][Number(j3)-1]==((-2)*color) ) && (checkers1[Number(i3)+2][Number(j3)-2]==null)){
                //console.log("to left-bottom can beat");
                ////console.log(checkers1[Number(i3)+2][Number(j3)-2],checkers1[Number(i3)+3][Number(j3)-3],i3,j3);
                return new Array(i,j);
            }
            ////console.log(i3,j3);
            i3=Number(i3)+1;
            j3=Number(j3)-1;
        }
        while(checkers1.hasOwnProperty(Number(i4)+1) && checkers1.hasOwnProperty(Number(i4)+2)&&checkers1[Number(i4)+1].hasOwnProperty(Number(j4)+1)&&checkers1[Number(i4)+2].hasOwnProperty(Number(j4)+2)){
            if((checkers1[Number(i4)+1][Number(j4)+1]==(-1*color) || checkers1[Number(i4)+1][Number(j4)+1]==(-2*color))&&(checkers1[Number(i4)+2][Number(j4)+2]==(-1*color) || checkers1[Number(i4)+2][Number(j4)+2]==(-2*color)))break;
            if( (checkers1[Number(i4)+1][Number(j4)+1]==((-1)*color) || checkers1[Number(i4)+1][Number(j4)+1]==((-2)*color) ) && (checkers1[Number(i4)+2][Number(j4)+2]==null)){
                //console.log("to right-bottom can beat");
                return new Array(i,j);
            }
            i4=Number(i4)+1;
            j4=Number(j4)+1;
        }
    }
}


async function dropChecker1(){
    if(selectedChecker!=undefined){
        let cell=$(this);
        let myArr=cell.attr('id').split('-');
        let idRow=Number(myArr[1]);
        let idCol=Number(myArr[2]);
        if(isCanBeat(selectedChecker[0],selectedChecker[1],1) && checkers1[idRow][idCol]==null && checkers1[selectedChecker[0]][selectedChecker[1]]==1){
            if(((idRow==Number(selectedChecker[0])+2) && idCol==Number(selectedChecker[1])+2)
                ||((idRow==Number(selectedChecker[0])-2) && idCol==Number(selectedChecker[1])+2)
                ||((idRow==Number(selectedChecker[0])+2) && idCol==Number(selectedChecker[1])-2)
                ||((idRow==Number(selectedChecker[0])-2) && idCol==Number(selectedChecker[1])-2)){

                checkers1[idRow][idCol]=checkers1[(selectedChecker[0])][(selectedChecker[1])];
                checkers1[selectedChecker[0]][selectedChecker[1]]=null;
                checkers1[((Number(idRow)+Number(selectedChecker[0]))/2)][((Number(idCol)+Number(selectedChecker[1]))/2)]=null;
                if(idRow==0){
                    checkers1[idRow][idCol]=2;
                }
                renderCheckers1()
                if(isCanBeat(idRow,idCol,1)){
                    $(`.white-checker[i$=${idRow}][j$=${idCol}]`).click();
                    ////$(`#checker-${idRow}-${idCol}`).click();
                    selectedChecker=new Array(idRow,idCol);
                }
                if(!isCanBeat(idRow,idCol,1)){ //после битья черной шашки не всегда заканчивается ход белых
                    selectedChecker=undefined;
                    await pcTurn()
                    //PC TURN
                }
            }

        }

        else if((checkers1[selectedChecker[0]][selectedChecker[1]]==1 && checkers1[idRow][idCol]==null) && ( ((idRow==Number(selectedChecker[0])-1)&&idCol==(Number)(selectedChecker[1])-1) ||((idRow==Number(selectedChecker[0])-1)&&idCol==(Number)(selectedChecker[1])+1) ) ){
            {
                checkers1[idRow][idCol]=checkers1[(selectedChecker[0])][(selectedChecker[1])]
                checkers1[selectedChecker[0]][selectedChecker[1]]=null;
                if(idRow==0){
                    checkers1[idRow][idCol]=2;
                }
                renderCheckers1()
                await pcTurn()
            }
            selectedChecker=undefined;
        }
        else if(checkers1[selectedChecker[0]][selectedChecker[1]]==2 && isCanBeat(selectedChecker[0],selectedChecker[1],1)){
            console.log("damka can beat")

        }
        else if(checkers1[selectedChecker[0]][selectedChecker[1]]==2 && !isCanBeat(selectedChecker[0],selectedChecker[1],1) && iswhiteCheckerCanStep(selectedChecker[0],selectedChecker[1])){
            console.log("damka can step")
            console.log(idRow,idCol,((Number(Number(selectedChecker[0])-idRow)<0)&&(Number(Number(selectedChecker[1])-idCol)>0)),((Number(selectedChecker[0])-idRow)==(Number(selectedChecker[1])-idCol)))
            if(Math.abs(Number(selectedChecker[0])-idRow)==Math.abs(Number(selectedChecker[1])-idCol)){
                console.log("==="+((Number(selectedChecker[0])-idRow)==(Number(selectedChecker[1])-idCol)))
                let flag=0;
                if((Number(selectedChecker[0])-idRow)<0 &&(Number(selectedChecker[1])-idCol)<0){
                    console.log("to right-bot")
                    let x=Number(idRow)-Number(selectedChecker[0]);
                    for(let i=1;i<=x;++i){
                        console.log(i,x,Number(selectedChecker[0])+i,Number(selectedChecker[1])+i);
                        if((checkers1[Number(selectedChecker[0])+i][Number(selectedChecker[1])+i])!=null){
                            flag=1; break
                        }
                    }
                }
                else if((Number(Number(selectedChecker[0])-idRow)>0)&&(Number(Number(selectedChecker[1])-idCol)>0)){
                    console.log("to left-top")
                    let x=Number(idRow)-Number(selectedChecker[0]);
                    for(let i=1;i<=x;++i){
                        console.log(i,x,Number(selectedChecker[0])-i,Number(selectedChecker[1])-i);
                        if((checkers1[Number(selectedChecker[0])-i][Number(selectedChecker[1])-i])!=null){
                            flag=1; break
                        }
                    }

                }
                else if((Number(Number(selectedChecker[0])-idRow)>0)&&(Number(Number(selectedChecker[1])-idCol)<0)){
                    console.log("to right-top")
                    let x=Number(idRow)-Number(selectedChecker[0]);
                    for(let i=1;i<=Math.abs(x);++i){
                        console.log(i,x,Number(selectedChecker[0])-i,Number(selectedChecker[1])+i);
                        if((checkers1[Number(selectedChecker[0])-i][Number(selectedChecker[1])+i])!=null){
                            flag=1; break
                        }
                    }

                }
                else if((Number(Number(selectedChecker[0])-idRow)<0)&&(Number(Number(selectedChecker[1])-idCol)>0)){
                    console.log("to left-bot")
                    let x=Number(idRow)-Number(selectedChecker[0]);

                    for(let i=1;i<=Math.abs(x);++i){
                        console.log(i,x,Number(selectedChecker[0])+i,Number(selectedChecker[1])-i);
                        if((checkers1[Number(selectedChecker[0])+i][Number(selectedChecker[1])-i])!=null){
                            flag=1; break
                        }
                    }

                }
                if(flag==0){
                    console.log("flag=0")
                    checkers1[idRow][idCol]=checkers1[selectedChecker[0]][selectedChecker[1]];
                    checkers1[selectedChecker[0]][selectedChecker[1]]=null;
                    renderCheckers1()
                    await pcTurn()
                }

            }

        }

    }
}

async function pcTurn(){
    blackCheckerCanBeat=[]
    for(let i=0;i<8;++i){
        for(let j=0;j<8;++j){
            if(isCanBeat(i,j,-1)){
                blackCheckerCanBeat.push(new Array(i,j))
            }
        }
    }
    if(blackCheckerCanBeat.length>0){
        let min = Math.ceil(0);
        let max = Math.floor(blackCheckerCanBeat.length);
        let blackChecker=blackCheckerCanBeat[Math.floor(Math.random() * blackCheckerCanBeat.length)];
        if(blackChecker==-1){
            do{
                await sleep(700)
                let tmpAr=[];
                //left top -can beat
                if(checkers1.hasOwnProperty(blackChecker[0]-1) && checkers1.hasOwnProperty(blackChecker[0]-2)&&checkers1[blackChecker[0]-1].hasOwnProperty(blackChecker[1]-1)&&checkers1[blackChecker[0]-2].hasOwnProperty(blackChecker[1]-2)){
                    if((checkers1[blackChecker[0]-1][blackChecker[1]-1]==(1)||checkers1[blackChecker[0]-1][blackChecker[1]-1]==(2)) && checkers1[blackChecker[0]-2][blackChecker[1]-2]==null)
                        tmpAr.push(new Array(blackChecker[0]-2,blackChecker[1]-2));
                }
                //right top -can beat
                if(checkers1.hasOwnProperty(blackChecker[0]-1) && checkers1.hasOwnProperty(blackChecker[0]-2)&&checkers1[blackChecker[0]-1].hasOwnProperty(Number(blackChecker[1])+1)&&checkers1[blackChecker[0]-2].hasOwnProperty(Number(blackChecker[1])+2)){
                    if((checkers1[blackChecker[0]-1][Number(blackChecker[1])+1]==(1)||checkers1[blackChecker[0]-1][Number(blackChecker[1])+1]==(2)) && checkers1[blackChecker[0]-2][Number(blackChecker[1])+2]==null)
                        tmpAr.push(new Array(blackChecker[0]-2,Number(blackChecker[1])+2));
                }
                //left bottom -can beat
                if(checkers1.hasOwnProperty(Number(blackChecker[0])+1) && checkers1.hasOwnProperty(Number(blackChecker[0])+2)&&checkers1[Number(blackChecker[0])+1].hasOwnProperty(Number(blackChecker[1])-1)&&checkers1[Number(blackChecker[0])+2].hasOwnProperty(Number(blackChecker[1])-2)){
                    if((checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])-1]==(1)||checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])-1]==(2)) && checkers1[Number(blackChecker[0])+2][Number(blackChecker[1])-2]==null)
                        tmpAr.push(new Array(Number(blackChecker[0])+2,Number(blackChecker[1])-2));
                }
                //right bottom - can beat
                if(checkers1.hasOwnProperty(Number(blackChecker[0])+1) && checkers1.hasOwnProperty(Number(blackChecker[0])+2)&&checkers1[Number(blackChecker[0])+1].hasOwnProperty(Number(blackChecker[1])+1)&&checkers1[Number(blackChecker[0])+2].hasOwnProperty(Number(blackChecker[1])+2)){
                    if((checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])+1]==(1)||checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])+1]==(2)) && checkers1[Number(blackChecker[0])+2][Number(blackChecker[1])+2]==null)
                        tmpAr.push(new Array(Number(blackChecker[0])+2,Number(blackChecker[1])+2));
                }
                let coords=tmpAr[Math.floor(Math.random() * tmpAr.length)]
                //beating:
                checkers1[coords[0]][coords[1]]=checkers1[blackChecker[0]][blackChecker[1]];
                checkers1[blackChecker[0]][blackChecker[1]]=null;
                checkers1[((Number(coords[0])+Number(blackChecker[0]))/2)][((Number(coords[1])+Number(blackChecker[1]))/2)]=null;
                blackChecker=new Array(coords[0],coords[1]);
                if(coords[0]==7){
                    console.log(coords[0])
                    checkers1[coords[0]][coords[1]]=-2;
                }
                renderCheckers1()
            }while(isCanBeat(blackChecker[0],blackChecker[1],-1))
        }
        if(blackChecker==-2){
            let tmpAr=possibleDamkaBeats(blackChecker[0],blackChecker[1],-2)// possible beat coords(coords)

        }
    }
    else{
        await sleep(700)
        // to do black step
        if(isblackCheckerCanStep()){
            let min = Math.ceil(0);
            let max = Math.floor(blackCheckersCanStep.length);
            let blackChecker=blackCheckersCanStep[Math.floor(Math.random() * blackCheckersCanStep.length)];
            let tmpAr=[];
            //step left bottom
            if(checkers1.hasOwnProperty(Number(blackChecker[0])+1) &&checkers1[Number(blackChecker[0])+1].hasOwnProperty(Number(blackChecker[1])-1) &&checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])-1]==null){
                    tmpAr.push(new Array(Number(blackChecker[0])+1,Number(blackChecker[1])-1));
            }
            //step right bottom
            if(checkers1.hasOwnProperty(Number(blackChecker[0])+1) &&checkers1[Number(blackChecker[0])+1].hasOwnProperty(Number(blackChecker[1])+1) &&checkers1[Number(blackChecker[0])+1][Number(blackChecker[1])+1]==null){
                tmpAr.push(new Array(Number(blackChecker[0])+1,Number(blackChecker[1])+1));
            }
            let coords=tmpAr[Math.floor(Math.random() * tmpAr.length)]
            checkers1[coords[0]][coords[1]]=checkers1[blackChecker[0]][blackChecker[1]];
            checkers1[blackChecker[0]][blackChecker[1]]=null;
            if(coords[0]==7){
                console.log(coords[0])
                checkers1[coords[0]][coords[1]]=-2;
            }
            renderCheckers1()
        }
    }
}
function isblackCheckerCanStep(){
    blackCheckersCanStep=[];
    for(let i=0;i<8;++i){
        for(let j=0;j<8;j++){
            if(((Number(i)+j)%2)==1){
                if(checkers1[i][j]==-1){
                    //console.log("**************** blackCheckerCanStep")
                    if((checkers1.hasOwnProperty(Number(i)+1)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)-1) && checkers1[Number(i)+1][Number(j)-1]==null)||
                        (checkers1.hasOwnProperty(Number(i)+1)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)+1)&&checkers1[Number(i)+1][Number(j)+1]==null)){
                        //console.log("======================")
                        blackCheckersCanStep.push(new Array(i,j))
                    }
                }
                // to do if checker== black damka
                /*if(checkers1[i][j]==-2){
                    //console.log("**************** blackCheckerCanStep")
                    if(   (checkers1.hasOwnProperty(Number(i)+1)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)-1) && checkers1[Number(i)+1][Number(j)-1]==null)
                        ||(checkers1.hasOwnProperty(Number(i)+1)&&checkers1[Number(i)+1].hasOwnProperty(Number(j)+1) && checkers1[Number(i)+1][Number(j)+1]==null)
                        ||(checkers1.hasOwnProperty(Number(i)-1)&&checkers1[Number(i)-1].hasOwnProperty(Number(j)-1) && checkers1[Number(i)-1][Number(j)-1]==null)
                        ||(checkers1.hasOwnProperty(Number(i)-1)&&checkers1[Number(i)-1].hasOwnProperty(Number(j)+1) && checkers1[Number(i)-1][Number(j)+1]==null)){
                        //console.log("======================")
                        blackCheckersCanStep.push(new Array(i,j))
                    }
                }*/
            }
        }
    }
    if(blackCheckersCanStep.length>0)return true
    else return false;
}

function iswhiteCheckerCanStep(i,j){
    if (checkers1[i][j]==1){
        if(((checkers1.hasOwnProperty(Number(i)-1) && checkers1[Number(i)-1].hasOwnProperty(Number(j)-1)) && checkers1[Number(i)-1][Number(j)-1]==null)||
            ((checkers1.hasOwnProperty(Number(i)-1) && checkers1[Number(i)-1].hasOwnProperty(Number(j)+1)) && checkers1[Number(i)-1][Number(j)+1]==null)){
            console.log("is white checker can step - true")
            return true
        }
        else{
            console.log("is white checker can step - false")
            return false;
        }
    }
    if (checkers1[i][j]==2){//white damka
        //left top
        if(checkers1.hasOwnProperty(Number(i)-1)&& checkers1[Number(i)-1].hasOwnProperty(Number(j)-1)&& checkers1[Number(i)-1][Number(j)-1]==null){return true}
        //right top
        if(checkers1.hasOwnProperty(Number(i)-1)&& checkers1[Number(i)-1].hasOwnProperty(Number(j)+1)&& checkers1[Number(i)-1][Number(j)+1]==null){return true}
        //left bot
        if(checkers1.hasOwnProperty(Number(i)+1)&& checkers1[Number(i)+1].hasOwnProperty(Number(j)-1)&& checkers1[Number(i)+1][Number(j)-1]==null){return true}
        //right bot
        if(checkers1.hasOwnProperty(Number(i)+1)&& checkers1[Number(i)+1].hasOwnProperty(Number(j)+1)&& checkers1[Number(i)+1][Number(j)+1]==null){return true}
        return false;
    }
}
function possibleDamkaBeats(x,y,color){

}