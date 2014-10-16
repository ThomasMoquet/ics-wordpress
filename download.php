<?php
if ($_POST){
    $calendar = "BEGIN:VCALENDAR\n";
    $calendar .= "VERSION:2.0\n";
    $calendar .= "BEGIN:VEVENT\n";
    $calendar .= "CLASS:PUBLIC\n";
    $calendar .= "DESCRIPTION:".$_POST['description']."\n";
    $calendar .= "DTSTART:".$_POST['begin_date']."\n";
    $calendar .= "DTEND:".$_POST['end_date']."\n";
    $calendar .= "LOCATION:".$_POST['location']."\n";
    $calendar .= "SUMMARY:".$_POST['title']."\n";
    $calendar .= "TRANSP:TRANSPARENT\n";
    $calendar .= "END:VEVENT\n";
    $calendar .= "END:VCALENDAR";
    header('Content-type: text/x-vCalendar;charset=utf-8');
    header('Content-Disposition: attachment; filename="event.ics"');
    echo $calendar;
}
