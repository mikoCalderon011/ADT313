<?php 
    $table = array(
        "header"=>array(
            "Student ID",
            "Last Name",
            "Middle Name",
            "First Name",
            "Course",
            "Section"
        ),
        "body"=>array(
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
            array(
                "last name"=>"Last Name",
                "middle name"=>"Middle Name",
                "first name"=>"First Name",
                "course"=>"Course",
                "section"=>"Section"
            ),
        )
    );

    $headerSize = sizeof($table["header"]);
    $arraySize = sizeof($table["body"]);
    $i  = 0;

    echo("<table>");
    echo("<tr>");
    foreach($table["header"] as $x) {
        echo("
            <th>
                $x
            </th>
        ");
    };
    foreach($table["body"] as $y) {
        echo("<tr>");
        echo("<td>");
        echo($i);
        echo("</td>");
        foreach($y as $z) {
            echo("<td>");
            echo($z);
            echo("</td>");
        }
        echo("<tr>");
        $i++;
    }
    echo("</tr>");
    echo("</tr>");
    echo("</table>");

?>