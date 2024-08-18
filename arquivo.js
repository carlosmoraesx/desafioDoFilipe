let vitorias = 50
let derrotas = 1
let patente;

if (vitorias <= 10){
    patente = "Patente ferro"
}else if (vitorias >= 11 && vitorias <= 20){
    patente = "bronze"
}else if (vitorias >= 21 && vitorias <= 50){
    patente = "prata"
}else if (vitorias >= 51 && vitorias <= 80){
    patente = "ouro"
}else if (vitorias >= 81 && vitorias <= 90){
    patente = "diamante"
}else if (vitorias >= 91 && vitorias <= 100){
    patente = "lendario"
}else if(vitorias >= 101 ){
    patente = "imortal"
}
    

console.log("o heroi tem " + (vitorias - derrotas) +  " vitorias e esta no nivel de "+ patente);
