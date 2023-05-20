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
        Schema::create('janji', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_psikolog');
            $table->unsignedBigInteger('id_pengguna');
            $table->date('tanggal');
            $table->enum('jam', ['10:00', '12:00', '14:00', '16:00']);
            $table->timestamps();

            $table->foreign('id_psikolog')->references('id')->on('psikolog');
            $table->foreign('id_pengguna')->references('id')->on('pengguna');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('janji');
    }
};