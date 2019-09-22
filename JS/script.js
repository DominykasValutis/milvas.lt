var visited = sessionStorage.getItem('visited');
var myVar;

function myFunction() {
    document.body.style.backgroundColor = "#BD7D4F";
    myVar = setTimeout(showPage, 3000);
    document.getElementById("page").classList.add("animate-bottom");
}


function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    document.body.style.backgroundColor = "#FFFFFF";
}

window.onload = function() {
    if (!('visited' in sessionStorage)) {
        myFunction();
        myVar = setTimeout(showPage, 3000);
        sessionStorage.setItem('visited', true);
    } else {
        showPage();
    }
}

document.getElementById('contact-btn').addEventListener("click", function() {
    document.getElementById('contact-card').style.display = 'block';
});

document.getElementById('close-btn').addEventListener("click", function(){
    document.getElementById('contact-card').style.display = 'none';
});