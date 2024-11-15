<?php

namespace TokoSepatu\Models\Models;

abstract class Shoe {
    protected $brand;
    protected $size;

    public function __construct($brand, $size) {
        $this->brand = $brand;
        $this->size = $size;
    }

    abstract public function getShoeInfo();
}
