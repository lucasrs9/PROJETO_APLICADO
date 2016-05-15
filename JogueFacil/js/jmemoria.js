function ScoreBoardGameControl (){
    var score = 0;
    var POINT_GAME = 10;
    var TEXT_SCORE = "Score : "

    var TOTAL_CORRECT = 10;
    var corrects = 0;

    this.updateScore =  function (){
        var scoreDiv = document.getElementById("score");
        scoreDiv.innerHTML =  TEXT_SCORE + score;
    }

    this.incrementScore =  function (){
        corrects++;
        score+= POINT_GAME;
        if (corrects ==  TOTAL_CORRECT){
            alert("Fim de Jogo! Seu Score foi " + score);
        }
    }

    this.decrementScore =  function (){
        score-= POINT_GAME;
    }
}

function Card(picture){
    var FOLDER_IMAGES = '../img/'
    var IMAGE_QUESTION  = "question.png"
    this.picture = picture;
    this.visible = false;
    this.block = false;

    this.equals =  function (cardGame){
        if (this.picture.valueOf() == cardGame.picture.valueOf()){
            return true;
        }
        return false;
    }
    this.getPathCardImage =  function(){
        return FOLDER_IMAGES+picture;
    }
    this.getQuestionImage =  function(){
        return FOLDER_IMAGES+IMAGE_QUESTION;
    }
}

function ControllerLogicGame(){
    var firstSelected;
    var secondSelected;
    var block = false;
    var TIME_SLEEP_BETWEEN_INTERVAL = 1000;
    var eventController = this;

    this.addEventListener =  function (eventName, callback){
        eventController[eventName] = callback;
    };

    this.doLogicGame =  function (card,callback){
        if (!card.block && !block) {
            if (firstSelected == null){
                firstSelected = card;
                card.visible = true;
            }else if (secondSelected == null && firstSelected != card){
                secondSelected = card;
                card.visible = true;
            }

            if (firstSelected != null && secondSelected != null){
                block = true;
                var timer = setInterval(function(){
                    if (secondSelected.equals(firstSelected)){
                        firstSelected.block = true;
                        secondSelected.block = true;
                        eventController["correct"]();
                    }else{
                        firstSelected.visible  = false;
                        secondSelected.visible  = false;
                        eventController["wrong"]();
                    }
                    firstSelected = null;
                    secondSelected = null;
                    clearInterval(timer);
                    block = false;
                    eventController["show"]();
                },TIME_SLEEP_BETWEEN_INTERVAL);
            }
            eventController["show"]();
        };
    };

}

function CardGame (cards , controllerLogicGame,scoreBoard){
    var LINES = 4;
    var COLS  = 5;
    this.cards = cards;
    var logicGame = controllerLogicGame;
    var scoreBoardGameControl = scoreBoard;

    this.clear = function (){
        var game = document.getElementById("game");
        game.innerHTML = '';
    }

    this.show =  function (){
        this.clear();
        scoreBoardGameControl.updateScore();
        var cardCount = 0;
        var game = document.getElementById("game");
        for(var i = 0 ; i < LINES; i++){
            for(var j = 0 ; j < COLS; j++){
                card = cards[cardCount++];
                var cardImage = document.createElement("img");
                if (card.visible){
                    cardImage.setAttribute("src",card.getPathCardImage());
                }else{
                    cardImage.setAttribute("src",card.getQuestionImage());
                }
                cardImage.onclick =  (function(position,cardGame) {
                    return function() {
                        card = cards[position];
                        var callback =  function (){
                            cardGame.show();
                        };
                        logicGame.addEventListener("correct",function (){
                            scoreBoardGameControl.incrementScore();
                            scoreBoardGameControl.updateScore();
                        });
                        logicGame.addEventListener("wrong",function (){
                            scoreBoardGameControl.decrementScore();
                            scoreBoardGameControl.updateScore();
                        });

                        logicGame.addEventListener("show",function (){
                            cardGame.show();
                        });

                        logicGame.doLogicGame(card);

                    };
                })(cardCount-1,this);

                game.appendChild(cardImage);
            }
            var br = document.createElement("br");
            game.appendChild(br);
        }
    }
}

function BuilderCardGame(){
    var pictures = new Array ('Aloísio Ferreira Gomes (Canarinho).png','Aloísio Ferreira Gomes (Canarinho).png',
		'Ana Paula Arósio.png','Ana Paula Arósio.png', 
		'André Valli.png','André Valli.png',
		'Antônio Fagundes.png','Antônio Fagundes.png',
		'Ariclê Perez.png','Ariclê Perez.png',
		'Caetano Veloso.png','Caetano Veloso.png', 
		'Carmen Miranda.png','Carmen Miranda.png', 
		'Cassia Kiss.png','Cassia Kiss.png', 
		'Cauã Reymond.png','Cauã Reymond.png', 
		'Celso Portiolli.png','Celso Portiolli.png', 
		'Chico Anysio.png','Chico Anysio.png', 
		'Chico Buarque.png','Chico Buarque.png', 
		'Claudio Cavalcanti.png','Claudio Cavalcanti.png', 
		'Cláudio Correa e Castro.png','Cláudio Correa e Castro.png', 
		'Clayton Silva.png','Clayton Silva.png', 
		'Cleyde Yáconis.png','Cleyde Yáconis.png', 
		'Dalva de Oliveira.png','Dalva de Oliveira.png', 
		'Fátima Bernardes.png','Fátima Bernardes.png', 
		'Faustão.png','Faustão.png', 
		'Fernanda Montenegro.png','Fernanda Montenegro.png', 
		'Francisco Alves.png','Francisco Alves.png', 
		'Garrincha.png','Garrincha.png', 
		'Gérson de Oliveira Nunes.png','Gérson de Oliveira Nunes.png', 
		'Gilberto Gil.png','Gilberto Gil.png', 
		'Glória Pires.png','Glória Pires.png', 
		'Gugu.png','Gugu.png',
		'Hebe Camargo.png','Hebe Camargo.png', 
		'Heleno de Freitas.png','Heleno de Freitas.png', 
		'Isis Valverde.png','Isis Valverde.png', 
		'Jairzinho.png','Jairzinho.png', 
		'John Herbert.png','John Herbert.png', 
		'Jorge Dória.png','Jorge Dória.png', 
		'Leônidas da Silva.png','Leônidas da Silva.png', 
		'Leticia Sabatela.png','Leticia Sabatela.png', 
		'Lídia Mattos.png','Lídia Mattos.png', 
		'Lilia Cabral.png','Lilia Cabral.png', 
		'Luciano Huck.png','Luciano Huck.png',
		'Luigi Barichelli.png','Luigi Barichelli.png',
		'Luiz Bonfa.png','Luiz Bonfa.png', 
		'Luiz Gonzaga.png','Luiz Gonzaga.png', 
		'Malu Mader.png','Malu Mader.png',
		'Mara Manzan.png','Mara Manzan.png', 
		'Maria Bethânia.png','Maria Bethânia.png',
		'Marina Ruy Barbosa.png','Marina Ruy Barbosa.png',
		'Maysa.png','Maysa.png',
		'Milton Nascimento.png','Milton Nascimento.png', 
		'Nelson Gonçalves.png','Nelson Gonçalves.png',
		'Nílton Santos.png','Nílton Santos.png', 
		'Oscar Magrini.png','Oscar Magrini.png', 
		'Paulo Betty.png','Paulo Betty.png', 
		'Paulo Goulart.png','Paulo Goulart.png', 
		'Pedro Bial.png','Pedro Bial.png', 
		'Pelé.png','Pelé.png', 
		'Pixinguinha.png','Pixinguinha.png', 
		'Regina Dourado.png','Regina Dourado.png',
		'Renato Aragão.png','Renato Aragão.png',
		'Roberto Carlos.png','Roberto Carlos.png', 
		'Roberto Rivellino.png','Roberto Rivellino.png' 
		'Rodolfo Bottino.png','Rodolfo Bottino.png',
		'Rodrigo Santoro.png','Rodrigo Santoro.png',
		'Romário.png','Romário.png',
		'Sebastião Vasconcelos.png','Sebastião Vasconcelos.png',
		'Silvio Santos.png','Silvio Santos.png', 
		'Susana Vieira.png','Susana Vieira.png',
		'Tarcisio Meira.png','Tarcisio Meira.png',
		'Thiago Lacerda.png','Thiago Lacerda.png', 
		'Tom Jobim.png','Tom Jobim.png', 
		'Tony Ramos.png','Tony Ramos.png',
		'Valdir Pereira (Didi).png','Valdir Pereira (Didi).png',
		'Vinicius de Moraes.png','Vinicius de Moraes.png',
		'Wagner Moura.png','Wagner Moura.png',
		'William Bonner.png','William Bonner.png', 
		'Xuxa.png','Xuxa.png',
		'Zé Ramalho.png','Zé Ramalho.png');

    this.doCardGame =  function (){
        shufflePictures();
        cards  = buildCardGame();
        cardGame =  new CardGame(cards, new ControllerLogicGame(), new ScoreBoardGameControl())
        cardGame.clear();
        return cardGame;
    }

    var shufflePictures = function(){
        var i = pictures.length, j, tempi, tempj;
        if ( i == 0 ) return false;
        while ( --i ) {
            j = Math.floor( Math.random() * ( i + 1 ) );
            tempi = pictures[i];
            tempj = pictures[j];
            pictures[i] = tempj;
            pictures[j] = tempi;
        }
    }

    var buildCardGame =  function (){
        var countCards = 0;
        cards =  new Array();
        for (var i = pictures.length - 1; i >= 0; i--) {
            card =  new Card(pictures[i]);
            cards[countCards++] = card;
        };
        return cards;
    }
}

function GameControl (){

}

GameControl.createGame = function(){
    var builderCardGame =  new BuilderCardGame();
    cardGame = builderCardGame.doCardGame();
    cardGame.show();
}
