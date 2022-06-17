//Create div element generator function
function createDivs(n){
    for (var i = 0; i < n * n; i++){
        const div = document.createElement("div");
        const container = document.getElementById("container");
        container.appendChild(div);
        div.classList.add("divelement");
    }
}

//Create function to change the background color of a div after mouseover
function hightlightDiv(){
    var divelement = document.getElementsByClassName("divelement");
    var mouseDown = 0;
    document.body.onmousedown = function() { 
        ++mouseDown;
    }
    document.body.onmouseup = function() {
        --mouseDown;
    }
    for (var i = 0; i < divelement.length; i++) {
        divelement[i].addEventListener("mouseover",function() {
            if (mouseDown != 0){
                this.style.backgroundColor = "#AEDBCE";
            }
        });
        divelement[i].addEventListener("mousedown",function() {
            this.style.backgroundColor = "#AEDBCE";
        });
    };
}

//Create initial grid of 16x16 divs
createDivs(16);
//Allow initial grid to be hightlighted
hightlightDiv();

//Generate grid of divs from slider value
var slider = document.getElementById("myRange")
slider.onchange = function () { 
    document.querySelectorAll('.divelement').forEach(function(div) {
        div.remove()
      })
    document.getElementById("gridsize").innerHTML = (slider.value + "x" + slider.value);
    createDivs(slider.value);
    var r = document.querySelector(':root');
    r.style.setProperty('--numberOfDivs', slider.value);
    hightlightDiv();
}

function clearBoard(){
    var divelement = document.getElementsByClassName("divelement");
    for (var i = 0; i < divelement.length; i++) {
        divelement[i].style.backgroundColor = "#635666";
    };
}


