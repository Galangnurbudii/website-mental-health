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
        Schema::create('tanggal_tidak_tersedia', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_psikolog');
            $table->date('tanggal_mulai');
            $table->enum('jam_mulai', ['10:00', '12:00', '14:00', '16:00']);
            $table->date('tanggal_selesai');
            $table->enum('jam_selesai', ['12:00', '14:00', '16:00', '18:00']);
            $table->timestamps();

            $table->foreign('id_psikolog')->references('id')->on('psikolog');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tanggal_tidak_tersedia');
    }
};