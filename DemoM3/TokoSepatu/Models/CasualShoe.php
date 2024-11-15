<?php

namespace TokoSepatu\Models\Models;

require_once __DIR__ . '/../Traits/DiscountTrait.php';

use TokoSepatu\Traits\DiscountTrait;

class CasualShoe extends Shoe {
    use DiscountTrait;

    public function getShoeInfo() {
        return "Casual Shoe - Brand: " . $this->brand . ", Size: " . $this->size;
    }
}
