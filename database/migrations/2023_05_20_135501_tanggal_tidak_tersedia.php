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
            $table->date('tanggal_selesai');
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
        Schema::dropIfExists('tanggal_tidak_tersedia');
    }
};