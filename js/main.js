$(document).ready(function() {
    $('#myModal').modal('show');
  
});



let countEnergy = 0;
let hist1 = null;
let hist2 = null;
let hist3 = null;
let hist4 = null;
let hist5 = null;
let hist6 = null;
let hist7 = null;



const CURRENT_ENERGY = document.getElementById('currentEnergy');
const HIST_1 = document.getElementById('hist1');
const HIST_2 = document.getElementById('hist2');
const HIST_3 = document.getElementById('hist3');
const HIST_4 = document.getElementById('hist4');
const HIST_5 = document.getElementById('hist5');
const HIST_6 = document.getElementById('hist6');
const HIST_7 = document.getElementById('hist7');


function startmatch() {
	
    CURRENT_ENERGY.innerHTML = (countEnergy = 3) + "/10";
    
   
    HIST_7.innerHTML = null;
    HIST_6.innerHTML = null;
    HIST_5.innerHTML = null;
    HIST_4.innerHTML = null;
    HIST_3.innerHTML = null;
    HIST_2.innerHTML = null;
    HIST_1.innerHTML = null;
    
    hist1 = null;
    hist2 = null;
    hist3 = null;
    hist4 = null;
    hist5 = null;
    hist6 = null;
    hist7 = null;
    
}

function newturn() {
    if (countEnergy <= 8) {
        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 2) + "/10";
    } else {
        CURRENT_ENERGY.innerHTML = (countEnergy = 10) + "/10";
    }
    
    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 =hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 =hist1;
    HIST_1.innerHTML = hist1 = " +" + 2;

}




function menoscard(custo) {
    if (countEnergy > 0) {
     if (custo == 1) {

        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 1) + "/10";
        
        
    }
    else if (custo == 2) {
        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 2) + "/10";
       
    }
    else if (custo == 3) {
        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 3) + "/10";
       
    }
    else if (custo == 4) {
        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 4) + "/10";
        
    }
   
    }
    
    if (countEnergy < 0) {
     
        CURRENT_ENERGY.innerHTML = (countEnergy = 0 ) + "/10";

    }

    
    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 =hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 =hist1;
    HIST_1.innerHTML = hist1 = " -" + custo;
    
}

function maiscard(custo) {
    if (countEnergy < 10) {
   if (custo == 1) {

            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 1) + "/10";
        
        }
        else if (custo == 2) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 2) + "/10";
            
        }
        else if (custo == 3) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 3) + "/10";
            
        }
        else if (custo == 4) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 4) + "/10";
            
        }
        
    }

    if (countEnergy > 10) {
     
        CURRENT_ENERGY.innerHTML = (countEnergy = 10) + "/10";

    }
    
    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 =hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 =hist1;
    HIST_1.innerHTML = hist1 = " +" + custo;
    
    


}

let energyday = 20;
let vitoria = 0;
let derrota = 0;
let empate = 0;
let vitoriapercent = 0;
let totalbatalhas = 0;
let winrate = 0;
const CURRENT_ENERGYDAY = document.getElementById('energyday');
const CURRENT_VITORIA = document.getElementById('vitorias');
const CURRENT_EMPATE = document.getElementById('empates');
const CURRENT_DERROTA = document.getElementById('derrotas');
const CURRENT_WINRATE = document.getElementById('winrate');

function win() {
    if (energyday > 0) {
  
            CURRENT_ENERGYDAY.innerHTML =  "Energias: "+(energyday = energyday-1) + "/20";
        
    }

    totalbatalhas = totalbatalhas + 1;
    vitoria = vitoria + 1;
    winrate = (vitoria*100)/totalbatalhas;
   
    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";
    CURRENT_VITORIA.innerHTML = vitoria;

}
function lose() {
    if (energyday > 0) {
  
        CURRENT_ENERGYDAY.innerHTML = "Energias: "+(energyday = energyday-1) + "/20";
        
        
    }

    derrota = derrota + 1;
    totalbatalhas = totalbatalhas + 1;
    winrate = (vitoria*100)/totalbatalhas;
    CURRENT_DERROTA.innerHTML = derrota;
    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";

}
function draw() {
    if (energyday > 0) {
  
        CURRENT_ENERGYDAY.innerHTML =  "Energias: "+(energyday = energyday-1) + "/20";
        
       

    }
    
    empate = empate + 1;
    totalbatalhas = totalbatalhas + 1;
    winrate = ((vitoria+(empate*0.5)) * 100) / totalbatalhas;
    CURRENT_EMPATE.innerHTML = empate;
    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";
}