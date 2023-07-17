<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('harga_layanan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_psikolog');
            $table->enum('jenis_layanan', ['offline', 'online']);
            $table->decimal('harga', 8, 2);
            $table->timestamps();
            $table->foreign('id_psikolog')->references('id')->on('psikolog')->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Harga_layanan');
    }
};