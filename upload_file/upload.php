<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
</head>
<body>
    <form action="upload.php" method="post"
        enctype="multipart/form-data">
        <label for="file">Ten file:</label> 
        <input type="file" name="myFile">
        <br>
        <input type="submit" name="upload">
    </form>
</body>
</html>

<?php
    if(isset($_POST['upload'])) {
        $file = $_FILES['myFile']['tmp_name'];
        $path = "upload/" . $_FILES['myFile']['name'];
        if(move_uploaded_file($file, $path)) {
            echo"Uploading success!";
        }
        else {
            echo"Error uploading the file!";
        }
    }
?>