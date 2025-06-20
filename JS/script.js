let page

window.addEventListener("load", function () {
    const path = window.location.pathname; // Ex: "/faute.html"
    page = path.split("/").pop();    // Extrait "faute.html"
});
//  /!\ faire chemain absolu
function Accueil() {
    if (page == "index.html") {
        return true
    }
    else  {
        window.location.href = "/HTML/index.html"
    }
    
}

function Faute() {
    if (page == "Faute.html") {
        return true
    }
    else {
        window.location.href = "/HTML/Faute_FOL/Faute.html"
    }
    
}

function Signe(){
    console.log("hi")
}