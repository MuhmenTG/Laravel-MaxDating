<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use phpDocumentor\Reflection\Types\Null_;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('label');
            $table->string('msg');
            $table->integer('additionalInfo')->nullable()->default(Null);
            $table->string('additionalAction')->nullable()->default(Null);
            $table->bigInteger('userToNotify');
            $table->bigInteger('userWhoFiredEvent');
            $table->integer('isViewed')->default(0);
            $table->integer('isShowned')->default(0);
            $table->integer('time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}
