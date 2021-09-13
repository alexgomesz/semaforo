"use strict"

var id = null
var cor = null

let estado = (comparacao) => document.querySelector("img").src
.toLowerCase().endsWith(comparacao.toLowerCase() + ".png")

function ligar(arquivo){
    if(arquivo === "")
        throw 0;
    else 
        cor = arquivo;
    
    return document.querySelector("img").src = "img/" + arquivo + ".png" 
}

function parar(){
    if(id != null){
        clearInterval(id)
        id = null
    }
}


function clicar(evento, arquivo){
    parar()
    ligar(arquivo)
}

function automatico(){
    
    if(id == null){
        id = setInterval( () => {
            switch(cor){
                case "vermelho":
                    ligar("amarelo")
                    break;
                case "amarelo":
                    ligar("verde")
                    break;
                case "verde":
                    ligar("vermelho")
                    break;
                default:
                    ligar(["amarelo", "verde", "vermelho"][ (Math.random() * 2).toFixed(0)])
            }
            
        }, 1000)
    }
    else
        parar()
}

document.getElementById("vermelho").addEventListener("click", (event, ) => clicar(event, "vermelho"))
document.getElementById("amarelo").addEventListener("click", (event, ) => clicar(event, "amarelo"))
document.getElementById("verde").addEventListener("click", (event, ) => clicar(event, "verde"))
document.getElementById("automatico").addEventListener("click", automatico)