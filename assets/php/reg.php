<?php
    $login = filter_var(trim($_POST['login']));
    $name = filter_var(trim($_POST['name']));
    $pass = filter_var(trim($_POST['pass']));

    if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
        echo "Недопустимая длина логина!";
        return;
    } else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
        echo "Недопустимая длина имени!";
        return;
    } else if (mb_strlen($pass) < 8) {
        echo "Недопустимая длина пароля! (от 8 и более)";
        return;
    }

    $pass = md5($pass."qwerty12345");

    require "../php/connect.php";
    $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) VALUES ('$login', '$pass', '$name')");

    $mysql->close();

    header('Location: /');
?>