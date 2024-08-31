<?php
    // Miko B. Calderon
    # BSCS 3A

    /* 
        I am a certified swagapino
    */

    echo"Hello";
    $txt = "World";
    echo($txt);
    echo"<h1>hehe</h1>";

    if($txt == "Worlds") {
        echo('ako c bhoxcs neil mapagmahal 42069');
    }
    else {
        echo"<h1> 
        __   _(_) __| | ___  ___     __ _  __ _ _ __ ___   ___  ___ <br />
        \ \ / / |/ _` |/ _ \/ _ \   / _` |/ _` | '_ ` _ \ / _ \/ __|<br />
         \ V /| | (_| |  __/ (_) | | (_| | (_| | | | | | |  __/\__ \<br />
          \_/ |_|\__,_|\___|\___/   \__, |\__,_|_| |_| |_|\___||___/<br />
                             |___/                           
                             </h1>";
    }

    echo"<h1>POGI BA SI NEIL</h1>";

    $authenticated = false;
    $checkAccess = $authenticated ? "<h4 style='color: 'red''>HINDE</h4>" : "<h4 style='color:red'>OO</h4>";
    echo($checkAccess);

    $colors = array("red", "blue", "green", "yellow");

    foreach($colors as $x) {
        echo("$x <br>");
    };

    function myMessage($message) {
        echo("$message");
    };

    myMessage("Ligma");

    $info = array(
        "user"=>array(
            "fName"=>"Miko",
            "mInitial"=>"B.",
            "lName"=>"Calderon"
        ),
        "address"=>array(
            "province"=>"bulacan",
            "municipality"=>"bocaue",
            "barangay"=>"caingin"
        )
        );

        echo $info["address"]["municipality"] ."</br>";

    // $colors = arra
?>
