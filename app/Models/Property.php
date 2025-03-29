<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    protected $fillable = ['address', 'city', 'state', 'zip_code', 'price', 'bedrooms', 'bathrooms', 'square_feet', 'property_type'];

    public function images()
    {
        return $this->hasMany(PropertyImage::class);
    }
}
