<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->text('address');
            $table->text('city');
            $table->text('state');
            $table->text('zip_code');
            $table->decimal('price', 15, 2);
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('square_feet');
            $table->text('property_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
