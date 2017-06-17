
//This is old stuff, that sorta works sometimes...
//



function getInputs {
	var height = document.getElementById("val1").value;
	var symbol = document.getElementById("val2").value;
	var base = (height*2)-1;
};
	return base, symbol;

getInputs(val1, val2);

console.log(base, symblol);



var myBtn = document.getElementById("myBtn").addEventListener("click", function() {);


var height = document.getElementById("val1");
var symbol = document.getElementById("val2");

var base = (height*2)-1;




var treeBtn = document.getElementById("myBtn");
treeBtn.addEventListener("click",function(base, symbol) {
    var space = (base-1)/2;
    for (var width=1; width <= base; width += 2) {
        console.log((Array(space+1).join(" ")) + Array(width+1).join(symbol) + (Array(space+1).join(" ")));
        space -= 1;
    };
space = ((base-1)/2)-1;
console.log((Array(space+1).join(" "))  + (Array(space+1).join(" ")));
}

// makeATree(base, symbol);
