// signe.js //
var Entreprise = ['form-Type','form-Entreprise','form-Entreprise-address','form-Entreprise-locality','form-Entreprise-All'];
var Etudiant = ['form-Type','form-Etudiant','form-Student-address','form-Student-skills','form-Etudiant-All'];
var Pilote = ['form-Type','form-Pilote','form-Pilote-address','form-Pilote-All'];
const pages = [Entreprise,Etudiant,Pilote,["form-Type"]];
var page = [];
var width_content = 512;
var index = 0;

document.getElementById("opt-error").style.display = "none";
document.getElementById("opt-sector").style.display = "none";
document.getElementById("opt-city").style.display = "none";
document.getElementById("opt-Entreprise-type").style.display = "none";
document.getElementById("opt-Pilote-city").style.display = "none";
document.getElementById("opt-Pilote-campus").style.display = "none";
document.getElementById("opt-Pilote-promo").style.display = "none";
document.getElementById("opt-Student-city").style.display = "none";
document.getElementById("opt-Student-campus").style.display = "none";
document.getElementById("opt-Student-promo").style.display = "none";
document.getElementById("opt-Student-Skill").style.display = "none";


function Afficher(nb,sens,page) {
    for (var i = 0; i < page.length; i++) {
        var Element = document.getElementById(page[i]);
        if (i == nb) {
            Element.style.opacity = 1;
            Element.style.left = "55px";
        } 

        else {   
            Element.style.opacity = 0;
            if (sens == "left" && i < nb) {
                Element.style.left = "-520px";
            }
            else if (sens == "right" && i > nb) {
                Element.style.left = "520px";
            }
        }
    }
}

function Next_Type() {
    var SelectType = document.getElementById("register-type");
    var TypeValue = SelectType.options[SelectType.selectedIndex].value;
    if (TypeValue !== "error")
    {
        index++;
        Afficher(index,"left",Tab(TypeValue));
    }
    else {
        alert("Veuillez choisir un type de compte");
    }
}

function Tab(type) {
    switch (type) {
        case "Entreprise":
            page = pages[0];
            break;
    
        case "Etudiant":
            page = pages[1];
            break;
    
        case "Pilote" :
            page = pages[2];
            break;
    
        case "error":
            page = pages[3];
            break;
    
        default:
            page = pages[3];
            break;
    }
    return page;
}

function Next(type) {
    page = Tab(type);
    if (index < page.length-1) {
        index++;
    }
    Afficher(index,"left",page);
}

function Previous(type) {
    page = Tab(type);
    if (index != 0) {
        index--;
    }
    Afficher(index,"right",page);
}

function Add_site() {
    alert("Ajouter un site");
}

// Afficher(index,"left",Tab("error"));
Afficher(index = 3,"left",Tab("Etudiant"));

