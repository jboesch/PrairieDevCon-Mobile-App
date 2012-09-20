<?
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
function nullempty($str){
    return (stristr($str, 'NULL')) ? '' : $str;
}

function speakerSort($a, $b){
    return strcasecmp($a['name'], $b['name']);
}

function dowebsite($second, $pref){
    $w = '';
    if(!stristr($pref, 'null')){
        $w = $pref;
    } else if(!stristr($second, 'null')) {
        $w = $second;
    }
    return str_replace('http://', '', $w);
}

$contents = file_get_contents('PITDC_Speakers.txt');
$contents = explode("\n", $contents);
$speakers = array();

foreach($contents as $line){
    $fields = explode('	', $line);
    if($fields[0]){
        $speakers[] = array(
            'id' => $fields[0],
            'speaker' => $fields[1] . ' ' . $fields[2],
            'bio' => utf8_encode(str_replace(array('"'), '', $fields[3])),
            'email' => nullempty($fields[4]),
            'website' => dowebsite($fields[6], $fields[5]),
            'twitter' => nullempty($fields[7]),
            'pic' => nullempty($fields[8]),
            'company' => nullempty($fields[9]),
            'location' => str_replace(array('"', "\r", "\n"), '', nullempty($fields[10]))
        );
    }
}

$speakers[] = array(
    'id' => rand(123, 234234),
    'speaker' => 'Jason Toews',
    'bio' => "Jason Toews is CEO and co-founder of Regina-based GB Internet Solutions, developing the rapidly growing GasBuddy and OpenStore® brands. In 2000, Toews co-founded GasBuddy to help consumers save money on one of life’s more irksome costs – gas. Selected by Time Magazine as one of the Best Mobile Apps of 2012, GasBuddy now has over 19 million app downloads across iPhone, Android, Blackberry and Windows Phone in addition to its 240+ local websites. In 2009, Toews continued his success by launching award-winning OpenStore®, a mobile, web, and social media marketing platform to help retailers connect with their customers in the constantly evolving world of technology.",
    'pic' => 'jasontoews.jpg',
    'company' => 'GB Internet Solutions',
    'location' => 'Regina, SK',
    'website' => 'www.gasbuddy.com'
);

usort($speakers, 'speakerSort');

//print_r($speakers);
//exit;

echo file_put_contents('../data/speakers.json', pretty_json(json_encode($speakers)));