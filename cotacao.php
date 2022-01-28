
<?php

//$path = explode('/', $_GET['path']);

$dadosJsonPlans = file_get_contents("plans.json");
$dadosPlans = json_decode($dadosJsonPlans);

$dadosJsonPrices = file_get_contents("prices.json");
$dadosPrices = json_decode($dadosJsonPrices);

//var_dump($dadosPlans);




echo "------------------------------";

foreach($dadosPlans as $dados){
    echo $dados -> registro;
    echo "<pre>";

    
}

echo "------------------------------";

echo "<pre>";
print_r($dadosPlans) . PHP_EOL;
echo "</pre>";