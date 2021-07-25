<?php

    include 'connection.php';

    $query = "select * from jobs order by id desc";
    $result = mysqli_query($conn,$query);

    while($data = mysqli_fetch_row($result))
    {
        echo "<a href='#' onclick='openJob()' class='title font-weight-bold'>". $data[1] ."</a>";
        echo "<p class='insight'>Hourly $ " .$data[7]." - "." $ ".$data[8]." | Freelancer Level : ".$data[6]." | Est Time : ".$data[9]." | Posted : ". date("F j, Y, g:i a", strtotime($data[25]))."</p>";
        echo "<div class='detail'>".$data[4]."</div>";
        echo "<br>";
        echo "<div class='skill-tags'>";
        echo "<p class='tag border rounded-pill'>".$data[16]."</p>";
        echo "<p class='tag border rounded-pill'>".$data[17]."</p>";
        echo "<p class='tag border rounded-pill'>".$data[18]."</p>";
        echo "<p class='tag border rounded-pill'>".$data[19]."</p>";
        echo "<p class='tag border rounded-pill'>".$data[20]."</p>";
        echo "<p class='tag border rounded-pill'>".$data[21]."</p>";
        echo "</div>";
        echo "<p>proposals less than <b></b>".$data[24]."</b></p>";
        echo "<p>payment : ".$data[23]." - $".$data[14]." spent - Location : ".$data[15]."</p>";
    }

?>