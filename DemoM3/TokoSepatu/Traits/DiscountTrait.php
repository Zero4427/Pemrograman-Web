<?php

namespace TokoSepatu\Traits;

trait DiscountTrait {
    public function applyDiscount($price, $discount) {
        return $price - ($price * ($discount / 100));
    }
}
