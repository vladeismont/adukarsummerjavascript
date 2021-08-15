function myFunction(){
    var elem=document.createElement("div");
    elem.draggable=true;
    elem.classList.add("draggable");
    elem.innerHTML=document.getElementById("inp1").value+"<br>"+document.getElementById("inp2").value;
    document.getElementById("card1").appendChild(elem);
    elem.addEventListener('dragstart',()=>{
        elem.classList.add('dragging');
    })
    elem.addEventListener('dragend',()=>{
        elem.classList.remove('dragging');
    })
    elem.addEventListener('dblclick',()=>{
        elem.remove();
    })
    draggables.add(elem);
}
var draggables=[];
const containers=document.querySelectorAll('.container');

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}