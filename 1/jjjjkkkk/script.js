$(document).ready( function(){
    /*$("#board").html(renderCells(1,1));
    $("#board").html(renderCells(1,2));*/
    $(`#board`).html(renderBoard());
    renderCheckers();
    /*$(`.checker`).click(selectChecker);*/
})
function renderCells(row,col){
    /*if(setCellColor(row,col)==true){*/
    if(row%2==col%2){
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
    return `<div class="checker ${color}-checker" ind="${ind}"></div>`;
}
function renderCheckers(){
    clearBoard();
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

    console.log(CheckerInd);
    tmp.addClass("selected");
    console.log(checkers);
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
        renderCheckers();
        selectedChecker=undefined;
    }

}
function clearBoard(){
    $(`.cell.white`).unbind('click');
    $(`.cell.white`).html('');
}