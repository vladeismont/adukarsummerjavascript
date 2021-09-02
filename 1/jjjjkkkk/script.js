$(document).ready( function(){
    $(`#board`).html(renderBoard());
    /*renderCheckers();*/
    renderCheckers1();
})
function renderCells(row,col){
    //f((row%2==col%2)){ //for 1st version
    if(!(row%2==col%2)){
    return `<div id="cell-${row}-${col}" class="cell black"></div>`;}
    else{
    return `<div id="cell-${row}-${col}" class="cell white"></div>`;}
}
function renderBoard(){
    return `${renderRow(1)}${renderRow(2)}${renderRow(3)}${renderRow(4)}${renderRow(5)}${renderRow(6)}${renderRow(7)}${renderRow(8)}`;
}
function renderRow(row){
    return `<div class='row' id='row-${row}'>${renderCells(row,1)}${renderCells(row,2)}${renderCells(row,3)}${renderCells(row,4)}${renderCells(row,5)}${renderCells(row,6)}${renderCells(row,7)}${renderCells(row,8)}</div>`;
}
/*
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
    if(selectedChecker){
        let cell=$(this);
        let myArr=cell.attr('id').split('-');
        let idRow=myArr[1];
        let idCol=myArr[2];
        console.log(myArr,idRow,idCol)
        console.log(selectedChecker);
        selectedChecker.row=idRow;
        selectedChecker.col=idCol;
        if(selectedChecker.color=='white' && idRow==1) selectedChecker.isKing=true;
        if(selectedChecker.color=='black' && idRow==8) selectedChecker.isKing=true;
        renderCheckers();
        selectedChecker=undefined;
    }
}
//4600*/


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
checkers1=[
    [undefined,1,undefined,1,undefined,1,undefined,1],
    [-1,undefined,-1,undefined,-1,undefined,-1,undefined],
    [undefined,null,undefined,null,undefined,null,undefined,null],
    [null,undefined,null,undefined,null,undefined,null,undefined],
    [undefined,null,undefined,1,undefined,null,undefined,null],
    [-1,undefined,-1,undefined,-1,undefined,-1,undefined],
    [undefined,1,undefined,1,undefined,null,undefined,1],
    [1,undefined,1,undefined,1,undefined,1,undefined],
];
function renderCheckers1(){
    $(`.cell.black`).html('');
    $(`.cell.black`).click(dropChecker1);
    for(let i=0;i<8;++i){
        for(let j=0;j<8;++j){
            //let checker=checkers1[i][j];
            $(`#cell-${i}-${j}`).unbind('click');
            if(checkers1[i][j]==-1){
                $(`#cell-${i+1}-${j+1}`).html(renderChecker1('black',i,j));
            }
            if(checkers1[i][j]==1){
                $(`#cell-${i+1}-${j+1}`).html(renderChecker1('white',i,j));
            }

        }
    }
    $(`.checker`).click(selectChecker1);
}
function renderChecker1(color,i,j){
    return `<div class="checker ${color}-checker" i="${i}"  j="${j}"></div>`;
}

var selectedChecker=undefined;
function selectChecker1(){
    let tmp=$(this);
    if(tmp.hasClass("white-checker")){
        $(`.selected`).removeClass("selected");
        $(`.canDropChecker`).removeClass("canDropChecker");
        let CheckerInd1=tmp.attr("i");
        let CheckerInd2=tmp.attr("j");
        selectedChecker=checkers1[CheckerInd1][CheckerInd2];
        //console.log(CheckerInd1,CheckerInd2);
        tmp.addClass("selected");

        /*if(checkers1[CheckerInd1-1][CheckerInd2-1]==-1 && checkers1[CheckerInd1-2][CheckerInd2-2]==null){
            $(`#cell-${CheckerInd1-1}-${CheckerInd2-1}`).addClass("canDropChecker");
        }
        if(checkers1[CheckerInd1-1][Number(CheckerInd2)+1]==null){
            console.log(CheckerInd1-1,Number(CheckerInd2)+1);
            $(`#cell-${CheckerInd1}-${Number(CheckerInd2)+2}`).addClass("canDropChecker");
        }*/
        if(isWhiteCanBeat(CheckerInd1,CheckerInd2,checkers1[CheckerInd1][CheckerInd2])){ //is checker in battle
            console.log("white can beat");
        }


        return;
    }

}

function dropChecker1(){
    if(selectedChecker){

    }
}

function isWhiteCanBeat(i,j,color){
    console.log(i,j,color);

    /*if(i>1 && i<6){
        if(j>1 && j<6){
            if(checkers1[i-1][j-1]==-1 && checkers1[i-2][j-2]==null
                || checkers1[Number(i)+1][j-1]==-1 && checkers1[Number(i)+2][Number(j)-2]==null
                || checkers1[Number(i)-1][Number(j)+1]==-1 && checkers1[Number(i)-2][Number(j)+2]==null
                || checkers1[Number(i)+1][Number(j)+1]==-1 && checkers1[Number(i)+2][Number(j)+2]==null){
                console.log(i,j,"can beat");
                return true;
                }
        }
    }
    if(i==0){
        if(j==1){
            if(checkers1[Number(i)+1][Number(j)+1]==-1 && checkers1[Number(i)+2][Number(j)+2]==null)return true;
        }
        if(j==7){
            if(checkers1[Number(i)+1][Number(j)-1]==-1 && checkers1[Number(i)+2][Number(j)-2]==null)return true
        }
        if(j==3 || j==5){
            if(checkers1[Number(i)+1][Number(j)-1]==-1 && checkers1[Number(i)+2][Number(j)-2]==null
                ||checkers1[Number(i)+1][Number(j)+1]==-1 && checkers1[Number(i)+2][Number(j)+2]==null)return true;
        }
    }
    if(i==1){
        if(j==0){
            if(checkers1[Number(i)+1][Number(j)+1]==-1 && checkers1[Number(i)+2][Number(j)+2]==null){
                return true;
            }
        }
        if(j==6){
            if(checkers1[Number(i)+1][Number(j)-1]==-1 && checkers1[Number(i)+2][Number(j)-2]==null){
                return true;
            }
        }
        if(j==2 || j==4){
            if(checkers1[Number(i)+1][Number(j)+1]==-1 && checkers1[Number(i)+2][Number(j)+2]==null
                ||checkers1[Number(i)+1][Number(j)-1]==-1 && checkers1[Number(i)+2][Number(j)-2]==null){
                return true;
            }
        }

    }


    if(i==6){
        if(j==1){
            if(checkers1[Number(i)-1][Number(j)+1]==-1 && checkers1[Number(i)-2][Number(j)+2]==null){
                return true;
            }
        }
        if(j==7){
            if(checkers1[i-1][j-1]==-1 && checkers1[i-2][j-2]==null) return true;
        }

    }*/    //to do **

    console.log(":::"+checkers1[1].hasOwnProperty(7)); //left top -beat
    if(checkers1.hasOwnProperty(i-1)){
        if(checkers1[i-1].hasOwnProperty(j-1)){
            if(checkers1[i-2].hasOwnProperty(i-2)){
                if(checkers1[i-2].hasOwnProperty(j-2)){
                    if((checkers1[i-1][j-1]==-1||checkers1[i-1][j-1]==-2) && checkers1[i-2][j-2]==null) return true;
                }
            }
        }
    }
    return false;
}