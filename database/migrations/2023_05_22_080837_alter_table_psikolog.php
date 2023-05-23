<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTablePsikolog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('psikolog', function (Blueprint $table) {
            $table->string('negara')->nullable();
            $table->string('provinsi')->nullable();
            $table->string('kota')->nullable();
            $table->dropColumn('lokasi_praktik');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('psikolog', function (Blueprint $table) {
            $table->dropColumn('negara');
            $table->dropColumn('provinsi');
            $table->dropColumn('kota');
            $table->string('lokasi_praktik')->nullable();
        });
    }
}