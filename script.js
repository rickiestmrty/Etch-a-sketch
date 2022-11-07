const gridContainer = document.getElementById("grid-container");
function createGrid(numSqrs){
    
    let side = 500/numSqrs;

    gridContainer.style.setProperty('--grid-rows',numSqrs);
    gridContainer.style.setProperty('--grid-cols',numSqrs);

    
    for(let j=0;j<numSqrs*numSqrs;j++){
        let div = document.createElement("div");
        div.className = "grid-square";
        div.style.setProperty('--grid-side',side);
        console.log(div.style.width);
        gridContainer.appendChild(div);
    }
}

function destroyGrid(){
    const sqrs = document.getElementsByClassName("grid-square");
    Array.from(sqrs).forEach(square => {
        gridContainer.removeChild(square);
    });
}


function changeNumSquares(){
    let num = prompt("Please enter number of rows:");
    if(num>100){
        num = 100;
    }
    else if(num<1){
        num = 16;
    }
    destroyGrid();
    createGrid(num);
}

function main(){
    createGrid(16);

    const button = document.getElementById('changeBtn');
    button.addEventListener('click',()=>{
        changeNumSquares()
    });
}

main();