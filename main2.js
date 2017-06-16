



function makeATree(treeObject) {
    var treeHeight = parseInt(treeObject.height);
    var charType = treeObject.character;
    var currentBranch;
    var showTree = document.getElementById("showTree");
    var showTreeHTML = "";

    for (var i = 0; i < treeHeight; i++) {
        currentBranch = "";
        currentBranch += Array(treeHeight - i).join(" ");
        currentBranch += Array((1 + 2 * i) + 1).join(charType);
        currentBranch += Array(treeHeight - i).join(" ");
        console.log(currentBranch);

    };
    console.log("^ Look At That Amazing Tree");
}


function growTreeObject() {
    var branchValue = document.getElementById('treeHeight').value;
    var charValue = document.getElementById('charType').value;

    if (!(branchValue && charValue)){
        alert("That's not a height, fool");
    }   
        makeATree({
        height: branchValue,
        character: charValue
  });
}


var button = document.getElementById("grow");
var branchElement = document.getElementById('treeHeight');
var charElement = document.getElementById('charType');


function enterKey (a) {
    if (a.keyCode === 13 && (branchElement === document.activeElement || charElement === document.activeElement)) {
        a.preventDefault();
        growTreeObject();
    }
};
//So this is the return key stuff?
branchElement.addEventListener("keyup", enterKey);
charElement.addEventListener("keyup", enterKey);




button.addEventListener("click", growTreeObject);
