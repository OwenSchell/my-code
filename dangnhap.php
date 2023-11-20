<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in</title>
</head>
<body>
    <form action="index.php" method = "POST">
        <label for="side">Nhập tài khoản: </label>
        <input type="text" name="tk">
        <br>
        <label for="side2">Nhập mật khẩu: </label>
        <input type="text" name="pass">
        <br>
        <input type="submit" name="Đăng nhập">
    </form>
</body>
</html>
<?php
    echo "Form sign in";
?>    