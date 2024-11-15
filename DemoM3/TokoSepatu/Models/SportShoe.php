<?php

namespace TokoSepatu\Models\Models;

require_once __DIR__ . '/../Traits/DiscountTrait.php';

use TokoSepatu\Traits\DiscountTrait;

class SportShoe extends Shoe {
    use DiscountTrait;

    public function getShoeInfo() {
        return "Sport Shoe - Brand: " . $this->brand . ", Size: " . $this->size;
    }
}
