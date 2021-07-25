<?php

        include 'connection.php';

        $Entry = "Entry";
        $Intermediate = "Intermediate";
        $Expert = "Expert";

        $sql = "SELECT COUNT(*) FROM jobs where freelancer_needed > 0 and freelancer_needed < 2";
        $result = mysqli_query($conn, $sql);
        $OneFreelacerCount = mysqli_fetch_assoc($result)['COUNT(*)'];

        $sql2 = "SELECT COUNT(*) FROM jobs where freelancer_needed > 2 and freelancer_needed < 6";
        $result2 = mysqli_query($conn, $sql2);
        $TwotoFiveFreelacerCount = mysqli_fetch_assoc($result2)['COUNT(*)'];

        $sql3 = "SELECT COUNT(*) FROM jobs where freelancer_needed > 5";
        $result3 = mysqli_query($conn, $sql3);
        $MoreThanFiveFreelacerCount = mysqli_fetch_assoc($result3)['COUNT(*)'];

        $sql4 = "SELECT COUNT(*) FROM jobs where experience_level = '".$Entry."' ";
        $result4 = mysqli_query($conn, $sql4);
        $EntryLevelCount = mysqli_fetch_assoc($result4)['COUNT(*)'];

        $sql5 = "SELECT COUNT(*) FROM jobs where experience_level = '".$Intermediate."' ";
        $result5 = mysqli_query($conn, $sql5);
        $IntermediateLevelCount = mysqli_fetch_assoc($result5)['COUNT(*)'];

        $sql6 = "SELECT COUNT(*) FROM jobs where experience_level = '".$Expert."' ";
        $result6 = mysqli_query($conn, $sql6);
        $ExpertLevelCount = mysqli_fetch_assoc($result6)['COUNT(*)'];

        $sql7 = "SELECT COUNT(*) FROM jobs where fixed_price = 'NULL' ";
        $result7 = mysqli_query($conn, $sql7);
        $HourlyCount = mysqli_fetch_assoc($result7)['COUNT(*)'];

        $sql8 = "SELECT COUNT(*) FROM jobs where fixed_price != 'NULL' ";
        $result8 = mysqli_query($conn, $sql8);
        $FixedPriceCount = mysqli_fetch_assoc($result8)['COUNT(*)'];

        $sql9 = "SELECT COUNT(*) FROM jobs where fixed_price < '100' ";
        $result9 = mysqli_query($conn, $sql9);
        $LessThan100Count = mysqli_fetch_assoc($result9)['COUNT(*)'];

        $sql10 = "SELECT COUNT(*) FROM jobs where fixed_price >= '100' and fixed_price <= '500' ";
        $result10 = mysqli_query($conn, $sql10);
        $HunderedToFiveHunderedCount = mysqli_fetch_assoc($result10)['COUNT(*)'];

        $sql11 = "SELECT COUNT(*) FROM jobs where fixed_price >= '500' and fixed_price <= '1000' ";
        $result11 = mysqli_query($conn, $sql11);
        $FiveHunderedToOneThousandCount = mysqli_fetch_assoc($result11)['COUNT(*)'];

        $sql12 = "SELECT COUNT(*) FROM jobs where fixed_price >= '1000' and fixed_price <= '5000' ";
        $result12 = mysqli_query($conn, $sql12);
        $OneThousandToFiveThousandCount = mysqli_fetch_assoc($result12)['COUNT(*)'];

        $sql13 = "SELECT COUNT(*) FROM jobs where fixed_price >= '5000' ";
        $result13 = mysqli_query($conn, $sql13);
        $MoreThanFiveThousandCount = mysqli_fetch_assoc($result13)['COUNT(*)'];

        $sql14 = "SELECT COUNT(*) FROM jobs where payment = 'verified' ";
        $result14 = mysqli_query($conn, $sql14);
        $PaymentVerifiedCount = mysqli_fetch_assoc($result14)['COUNT(*)'];

        $sql15 = "SELECT COUNT(*) FROM jobs where client_hires = '0' ";
        $result15 = mysqli_query($conn, $sql15);
        $HireZeroClientCount = mysqli_fetch_assoc($result15)['COUNT(*)'];

        $sql16 = "SELECT COUNT(*) FROM jobs where client_hires >= '1' and client_hires <= '9' ";
        $result16 = mysqli_query($conn, $sql16);
        $HireOneToNineClientCount = mysqli_fetch_assoc($result16)['COUNT(*)'];

        $sql17 = "SELECT COUNT(*) FROM jobs where client_hires >= '10' ";
        $result17 = mysqli_query($conn, $sql17);
        $HireMoreThanTenClientCount = mysqli_fetch_assoc($result17)['COUNT(*)'];

        echo "<p
        id='btn-close'
        onclick='btnClose()'
        class='btn-close font-weight-bold'
        >
        X
        </p>
        <p class='font-weight-bold'>Filter By</p>
        <p class='font-weight-bold'>Category</p>
        <div class='input-group'>
        <input
        class='form-control border-end-0'
        type='text'
        placeholder='search'
        id='search1'
        />
        <span class='input-group-append'>
        <button
            class='btn btn-outline-secondary bg-white border-start-0'
            type='button' id='SearchBtn' name='SearchBtn'
        >
            <i class='fa fa-search'></i>
        </button>
        </span>
        </div>
        <br />
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>Freelancers Needed</p>
        <p><input class='checkbox' type='checkbox' name='OneFreelacer' id='OneFreelacer' /> 1(".$OneFreelacerCount.")</p>
        <p>
        <input class='checkbox' type='checkbox' name='TwotoFiveFreelacer' id='TwotoFiveFreelacer' /> 2 to 5(".$TwotoFiveFreelacerCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='MoreThanFiveFreelacer' id='MoreThanFiveFreelacer' /> More than
        5(".$MoreThanFiveFreelacerCount.")
        </p>
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>Experience Level</p>
        <p>
        <input class='checkbox' type='checkbox' name='EntryLevel' id='EntryLevel' /> Entry Level
        - $ (".$EntryLevelCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='Intermediate' id='Intermediate' />
        Intermediate - $$ (".$IntermediateLevelCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='Expert' id='Expert' /> Expert - $$
        (".$ExpertLevelCount.")
        </p>
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>Job Type</p>
        <p><input type='checkbox' name='Hourly' id='Hourly' /> Hourly (".$HourlyCount.")</p>
        <p>
        <input type='text' class='amount' id='HourlyMinRate' name='HourlyMinRate' placeholder='$ Min' /> /hr
        <input type='text' class='amount' id='HourlyMaxRate' name='HourlyMaxRate' placeholder='$ Min' /> /hr
        </p>
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>
        <input class='checkbox' type='checkbox' name='FixedPrice' id='FixedPrice' /> Fixed Price
        (".$FixedPriceCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='LessThan100' id='LessThan100' /> Less than
        $100 (".$LessThan100Count.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='HunderedToFiveHundered' id='HunderedToFiveHundered' /> $100 - $500
        (".$HunderedToFiveHunderedCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='FiveHunderedToOneThousand' id='FiveHunderedToOneThousand' /> $500 - $1k
        (".$FiveHunderedToOneThousandCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='OneThousandToFiveThousand' id='OneThousandToFiveThousand' /> $1k - $5k
        (".$OneThousandToFiveThousandCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='MoreThanFiveThousand' id='MoreThanFiveThousand' /> $5k (".$MoreThanFiveThousandCount.")
        </p>
        <p>
        <input type='text' class='amount' placeholder='$ Min' />
        <input type='text' class='amount' placeholder='$ Max' />
        </p>
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>Client Info</p>
        <p>
        <input class='checkbox' type='checkbox' name='PreviousClient' id='PreviousClient' /> My Previous
        Clients (0)
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='PaymentVerified' id='PaymentVerified' /> Payment
        Verified (".$PaymentVerifiedCount.")
        </p>
        <p class='divider'>________________________________</p>
        <br />
        <p class='tag'>Client History</p>
        <p>
        <input class='checkbox' type='checkbox' name='HireZeroClient' id='HireZeroClient' /> No hires
        (".$HireZeroClientCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='HireOneToNineClient' id='HireOneToNineClient' /> 1 to 9
        hires (".$HireOneToNineClientCount.")
        </p>
        <p>
        <input class='checkbox' type='checkbox' name='HireMoreThanTenClient' id='HireMoreThanTenClient' /> 10+ hires
        (".$HireMoreThanTenClientCount.")
        </p>
        <p class='divider'>________________________________</p>
        <br />
        </div>";

?>