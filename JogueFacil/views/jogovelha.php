<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width">
    <title>Jogo da Velha</title>
    <script src="../js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/jvelha.js"></script>

    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">

</head>
<body class"container-fluid">

    <!-- Carrega Menu Fixo-->
    <?php
    include_once("menu.php");
    ?>
    <section>
        <center><label><h4> Jogador 1 = X  </h4></label></center>
        <br>
        <center><label> <h4> Jogador 2 = O  </h4></label></center>
        <center><h4>Jogar Contra Máquina  <input type="checkbox" id="cpu" checked /><br /></h4></center>

        <table border="5px" cellspacing="7" align="center">
            <tr>
                <td><img src="../img/fundo.jpg" id="1" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="2" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="3" onclick="chkJogo(this.id)"></td>
            </tr>
            <tr>
                <td><img src="../img/fundo.jpg" id="4" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="5" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="6" onclick="chkJogo(this.id)"></td>
            </tr>
            <tr>
                <td><img src="../img/fundo.jpg" id="7" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="8" onclick="chkJogo(this.id)"></td>
                <td><img src="../img/fundo.jpg" id="9" onclick="chkJogo(this.id)"></td>
            </tr>
        </table>
        <center>
            <input type="submit" id="reinicia" value="Reiniciar" class="btn btn-lg btn-primary" onclick="reinicia()" checked>
        </section>
    </center>
</body>
</html>
