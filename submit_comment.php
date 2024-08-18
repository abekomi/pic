<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $comment = htmlspecialchars($_POST['comment']);
    
    // Save the data to a file or database
    // For example, save to a file:
    $file = fopen("comments.txt", "a");
    fwrite($file, "Name: $name\nComment: $comment\n\n");
    fclose($file);
    
    echo "Thank you for your comment!";
}
?>
