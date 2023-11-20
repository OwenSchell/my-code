<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>email</title>
</head>
<body>
   <h2>kiem tra du lieu nhap</h2>
   <form method="post" action="email.php">
   Name: <input type="text" name="name" value="<?php echo $name ?>" /> 
   <span class="error">* <?php echo $nameErr
    ?></span>
   <br><br>
   E-mail: <input type="text" name="email" value="<?php echo $email ?>" />
        <span class="error">* <?php echo $nameErr
    ?></span>
        <br><br>
   Wedsite: <input type="text" name="wedsite">
   <span class="error"></span>
   <br><br>
   <input type="submit" name="gui">
   </form>
</body>
</html>

<?php
   $nameErr="";
   $name="";
   $emailErr="";
   $email="";
   
   
   if(isset($_POST["gui"])){
      if(empty($_POST["name"])){
         $nameErr="phai nhap ten";
      }else {
         $name=$_POST["name"];
      }
       if(empty($_POST["name"])){
         $nameErr="phai nhap email";
      }else {
         $name=$_POST["email"];
      }

   }
?>