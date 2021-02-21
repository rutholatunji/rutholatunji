<?php
//How to recieve emails


if (isset($_POST['submit'])) {
    $name = trim($_POST['f_name']);
    $topic = trim($_POST['f_topic']);
    $message = trim($_POST['f_message']);
    $email = trim($_POST['f_email']);

    $myMail = "ruth.o2009@live.co.uk";
    $header = "From: ". $email;
    $message2 = "You have recieved a message from". $name . ".\n\n" . $message;
    //1. Email you're sending it to
    //2. Subject
    //3. Is the message

    mail($myMail, $subject, $message2, $header);
    header("Location: index.php?mailsent");

}

?>

