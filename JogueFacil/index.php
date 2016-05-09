<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" name="viewport" content="width=device-width">
  <title>Home</title>
  <script src="js/jquery-1.9.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body class"container-fluid">
  <!-- Carrega Menu Fixo-->
    <?php
    include_once("menuindex.php");
    ?>
    <!-- Carrega Home.php-->
    <?php
    include_once("views/home.php");
    ?>
</body>
</html>