<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
function pretty_json($json) {

    $result      = '';
    $pos         = 0;
    $strLen      = strlen($json);
    $indentStr   = '    ';
    $newLine     = "\n";
    $prevChar    = '';
    $outOfQuotes = true;

    for ($i=0; $i<=$strLen; $i++) {

        // Grab the next character in the string.
        $char = substr($json, $i, 1);

        // Are we inside a quoted string?
        if ($char == '"' && $prevChar != '\\') {
            $outOfQuotes = !$outOfQuotes;

            // If this character is the end of an element,
            // output a new line and indent the next line.
        } else if(($char == '}' || $char == ']') && $outOfQuotes) {
            $result .= $newLine;
            $pos --;
            for ($j=0; $j<$pos; $j++) {
                $result .= $indentStr;
            }
        }

        // Add the character to the result string.
        $result .= $char;

        // If the last character was the beginning of an element,
        // output a new line and indent the next line.
        if (($char == ',' || $char == '{' || $char == '[') && $outOfQuotes) {
            $result .= $newLine;
            if ($char == '{' || $char == '[') {
                $pos ++;
            }

            for ($j = 0; $j < $pos; $j++) {
                $result .= $indentStr;
            }
        }

        $prevChar = $char;
    }

    return $result;
}

$row = 0;
$i = 0;
$out = array();
$date = '2012-10-01';
$orig_desc = array();
if($content = file_get_contents('../data/sessions.json')){
    $content = json_decode($content, true);
    foreach($content as $item){
        if(isset($item['description'])){
            $orig_desc[$item['id']] = $item['description'];
        }
    }
}

if (($handle = fopen("pdc.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        $row++;

        if($row == 1){
            array_shift($data);
            $rooms = $data;
        }

        if($row != 1){

            $time = explode('-', $data[0]);
            $orig_start_time = trim($time[0]);
            $orig_end_time = trim($time[1]);

            foreach($data as $k => $cell_text){

                if($k == 0 && stristr($cell_text, 'day 2')){
                    $date = date('Y-m-d', strtotime('+1 day', strtotime($date)));
                    continue;
                }

                if($k != 0){
                    $dojo = false;
                    $cell_parts = explode(' ', $cell_text);
                    $speaker_last = array_pop($cell_parts);
                    $speaker_first = array_pop($cell_parts);

                    $speaker = str_replace(array('(', ')'), '', $speaker_first . ' ' . $speaker_last);
                    $title = utf8_decode(trim(join(' ', $cell_parts)));

                    if(stristr($cell_text, '(TBD)')){
                        $speaker = str_replace('(TBD)', '', $cell_text);
                        $title = 'TBD';
                    }

                    if(!$speaker_first || stristr($title, 'lunch')){
                        continue;
                    }

                    if(stristr($title, 'Source Control')){
                        $dojo = true;
                        $end_time = '12:00';
                    }
                    else if((stristr($speaker, 'Chambers') || stristr($speaker, 'Brent Watson')) && stristr($title, 'Dojo')){
                        $dojo = true;
                        $end_time = '5:15';
                    }
                    else if(stristr($title, 'Open Data:')){
                        $title = 'Open Data: A Paradigm Shift';
                        $speaker = 'Dale Zak, Andrew Dyck, Chad Emm';
                        $end_time = '10:30';
                    }
                    else if(stristr($title, 'Using Node.JS to Manage Client')){
                        $dojo = true;
                        $end_time = '12:00';
                    }
                    else if(stristr($title, 'Build an HTML5 Mobile')){
                        $dojo = true;
                        $end_time = '3:45';
                    }
                    else if(stristr($title, 'Backbone - Javascript')){
                        $title = 'Backbone - Javascript MVC';
                        $speaker = 'Chad Emm';
                    }
                    else {
                        $dojo = false;
                        $end_time = $orig_end_time;
                    }

                    if(in_array($speaker, $rooms)){
                        continue;
                    }

                    $start_parts = explode(':', $orig_start_time);
                    $start_hour = $start_parts[0];

                    $end_parts = explode(':', $end_time);
                    $end_hour = $end_parts[0];

                    if(in_array($start_hour, array(7, 8, 9))){
                        $start_time = $start_hour . ':' . $start_parts[1] . ' AM';
                    } else {
                        $start_time = $orig_start_time;
                    }

                    if(in_array($end_hour, array(7, 8, 9))){
                        $end_time = '0' . $end_hour . ':' . $end_parts[1] . ' AM';
                    }
//
                    if(in_array($start_hour, array(1, 2, 3, 4, 5, 6))){
                        $start_time = $start_hour . ':' . $start_parts[1] . ' PM';
                    } else {
                        $start_time = $orig_start_time;
                    }

                    if(in_array($end_hour, array(1, 2, 3, 4, 5, 6))){
                        $end_time = $end_hour . ':' . $end_parts[1] . 'PM';
                    }

                    $i++;
                    $out[] = array(
                        'id' => $i,
                        'speaker' => $speaker,
                        'title' => $title,
                        'room' => $rooms[$k - 1],
                        'date' => $date,
                        'start' => date('H:i', strtotime($start_time)),
                        'end' => date('H:i', strtotime($end_time)),
                        'dojo' => $dojo,
                        'description' => (isset($orig_desc[$i]) ? $orig_desc[$i] : '')
                    );
                }
            }
        }
    }
    fclose($handle);
}

//$new_rooms = array();
//foreach($rooms as $room_id => $room_name){
//    $new_rooms[] = array('id' => ($room_id + 1), 'name' => $room_name);
//}

//$day = 1;
//foreach($out as $date => $vals){
//    file_put_contents('../data/sessions_day' . $day . '.json', pretty_json(json_encode($vals)));
//    $day++;
//}

//echo json_encode($new_rooms);
echo file_put_contents('../data/sessions.json', pretty_json(json_encode($out)));
?>