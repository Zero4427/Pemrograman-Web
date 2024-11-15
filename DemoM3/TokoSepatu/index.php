<?php

require_once __DIR__ . '/Models/Shoe.php';
require_once __DIR__ . '/Models/SportShoe.php';
require_once __DIR__ . '/Models/CasualShoe.php';
require_once __DIR__ . '/Traits/DiscountTrait.php';

use TokoSepatu\Models\Models\CasualShoe as ModelsCasualShoe;
use TokoSepatu\Models\Models\SportShoe as ModelsSportShoe;

$sportShoe = new ModelsSportShoe("Nike", 42);
echo $sportShoe->getShoeInfo() . PHP_EOL;
echo "Price after discount: " . $sportShoe->applyDiscount(100, 10) . PHP_EOL;

$casualShoe = new ModelsCasualShoe("Adidas", 40);
echo $casualShoe->getShoeInfo() . PHP_EOL;
echo "Price after discount: " . $casualShoe->applyDiscount(80, 15) . PHP_EOL;

?>
