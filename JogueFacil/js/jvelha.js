//cria o jogador base
var jogador = "x";
var jogada = 0;
var bloqueado = false;

//funcão para realizar trocas das imagens
function chkJogo (id) {
 var src = chkSrc(id);
 var cpu = document.getElementById('cpu').checked;
 if(src == "fundo.jpg"){
  document.getElementById(id).src = "../img/"+jogador+".jpg";
  jogada ++;
            //chama a verificacao de vitoria e/ou empate

            if(chkVitoria()){
              alert("Fim de Jogo!\nVitoria do jogador "+ jogador);
              setTimeout(reinicia, 500);
              return;
            }
            if (jogada >=9) {
              alert("Fim de Jogo!\nEmpate");
              setTimeout(reinicia, 500);
              return;
            }
            if (jogador == "x") {
              jogador = "o";
            }else {
              jogador = "x";
            }
          }
          if (cpu && jogador == "o") {
            chkJogo(JogadaDoCpu());
          }
        }

        function JogadaDoCpu () {
         if(chkSrc("5") == "fundo.jpg"){
          return "5";
        }else{
          return Math.floor((Math.random() * 9) + 1);
        }
      }

//pega somente src valido da imagem
function chkSrc (id) {
 var src = document.getElementById(id).src;
 return src.substring(src.length - 9, src.length);
}
//verifica vencedor
function chkVitoria () {
  if(chkSrc('1') == chkSrc('2') && chkSrc('1') == chkSrc('3') && (chkSrc("1") != "fundo.jpg")||
   chkSrc('4') == chkSrc('5') && chkSrc('4') == chkSrc('6') && (chkSrc("4") != "fundo.jpg")||
   chkSrc('7') == chkSrc('8') && chkSrc('7') == chkSrc('9') && (chkSrc("7") != "fundo.jpg")||
   chkSrc('1') == chkSrc('4') && chkSrc('1') == chkSrc('7') && (chkSrc("1") != "fundo.jpg")||
   chkSrc('2') == chkSrc('5') && chkSrc('2') == chkSrc('8') && (chkSrc("2") != "fundo.jpg")||
   chkSrc('3') == chkSrc('6') && chkSrc('3') == chkSrc('9') && (chkSrc("3") != "fundo.jpg")||
   chkSrc('1') == chkSrc('5') && chkSrc('1') == chkSrc('9') && (chkSrc("1") != "fundo.jpg")||
   chkSrc('3') == chkSrc('5') && chkSrc('3') == chkSrc('7') && (chkSrc("3") != "fundo.jpg")){
    return true;
}else {
  return false;
}
}
//reinicia o jogo
function reinicia () {
 location.reload();
}