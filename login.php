<?php

    include 'connection.php';

    $email = $_POST['email'];
	$password = $_POST['password'];

    $EmailCheck = "select * from users where email = '".$email."' ";

    $query = mysqli_query($conn,$EmailCheck);
    $row = mysqli_fetch_array($query,MYSQLI_ASSOC);

    if($row){
        if (password_verify($password, $row['password'])) {

            session_start();

            $id = $_SESSION['user_id'] = $row['id'];
            $username = $_SESSION['username'] = $row['username'];
            $email = $_SESSION['email'] = $row['email'];

            echo json_encode(array("statusCode"=>200));
        }else{
            echo json_encode(array("statusCode"=>202));
        }
    }
    else{
        echo json_encode(array("statusCode"=>201));
    }


?>