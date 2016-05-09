<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width">
    <title>Jogo da Memoria</title>
    <script src="../js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/jmemoria.js"></script>

    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/jmemoria.css">

</head>
<body class"container-fluid" onload="GameControl.createGame()">

    <!-- Carrega Menu Fixo-->
    <?php
    include_once("menu.php");
    ?>
    <div  id="main" class="main">

        <div id="control">
            <input type="button"  class="button_game" value="Reiniciar" onclick="GameControl.createGame()"/>
        </div>
        <div id="score">
        </div>
        <div id="game">
        </div>
    </div>

</body>
</html>
