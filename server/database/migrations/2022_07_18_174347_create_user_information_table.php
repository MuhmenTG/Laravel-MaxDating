<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstName')->nullable();
            $table->string('lastName')->nullable();
            $table->string('email')->unique()->index()->nullable();;
            $table->string('password')->nullable();;
            $table->string('gender')->nullable();;
            $table->integer('registeredAt')->nullable();
            $table->string('userLocation')->nullable();
            $table->string('userAge')->nullable();
            $table->integer('userHeight')->nullable();
            $table->string('userWeight')->nullable();
            $table->string('userMaximumEducation')->nullable();
            $table->string('userReligion')->nullable();
            $table->string('userMaritalStatus')->nullable();
            $table->string('userSmokingStaus')->nullable();
            $table->string('userDrinkingStatus')->nullable();
            $table->string('userParentStatus')->nullable();
            $table->string('userEyeColor')->nullable();
            $table->string('userHairColor')->nullable();
            $table->string('userClothingStyle')->nullable();
            $table->string('userLivingStyle')->nullable();
            $table->integer('isLoggedIn')->default(0);
            $table->integer('isVerified')->default(0);
            $table->string('verifyToken')->nullable();
            
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
        Schema::dropIfExists('user_information');
    }
}
