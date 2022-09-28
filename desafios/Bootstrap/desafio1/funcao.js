function clicou(botao) {
    if (botao == 0) {
        document.getElementById('barra').style.width = "0%";
    }
    if (botao == 25) {
        document.getElementById('barra').style.width = "25%";
    }
    if (botao == 50) {
        document.getElementById('barra').style.width = "50%";
    }
    if (botao == 75) {
        document.getElementById('barra').style.width = "75%";
    }
    if(botao == 100){
        document.getElementById('barra').style.width = "100%";
    }
}