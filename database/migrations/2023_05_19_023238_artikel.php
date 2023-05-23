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
        Schema::create('artikel', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('tag');
            $table->text('detail');
            $table->unsignedBigInteger('id_admin');
            $table->unsignedBigInteger('id_psikolog');
            $table->timestamps();

            $table->foreign('id_admin')->references('id')->on('admin');
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
        Schema::dropIfExists('Artikel');
    }
};