<?php

    include 'connection.php';

    $name = $_POST['name'];
	$email = $_POST['email'];
	$username = $_POST['username'];
	$password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $uppercase = preg_match('@[A-Z]@', $password);
    $lowercase = preg_match('@[a-z]@', $password);
    $number    = preg_match('@[0-9]@', $password);

    $EmailCheck = "select * from users where email = '".$email."' ";

    $query = mysqli_query($conn,$EmailCheck);
    $row = mysqli_fetch_array($query,MYSQLI_ASSOC);

    if($row){
        echo json_encode(array("statusCode"=>204));
    }else{

        if(!$uppercase || !$lowercase || !$number || strlen($password) < 8) {
            echo json_encode(array("statusCode"=>203));
        }else{    

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode(array("statusCode"=>202));
            }else{
                $sql = "INSERT INTO `users`( `name`, `username`, `email`, `password`) 
                VALUES ('$name','$username','$email','$hashed_password')";
        
                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("statusCode"=>200));
                } else {
                    echo json_encode(array("statusCode"=>201));
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                $conn->close();
            }
        }

    }

?>