<?php
    $login = filter_var(trim($_POST['login']));
    $pass = filter_var(trim($_POST['pass']));

    $pass = md5($pass."qwerty12345");

    require "../php/connect.php";
    
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
    if ($result->num_rows == 0) {
        $user = $result->fetch_assoc();
        exit();
    }

    setcookie('user', $user['name'], time() + 3600, "/");

    $mysql->close();

    header('Location: /');
?>