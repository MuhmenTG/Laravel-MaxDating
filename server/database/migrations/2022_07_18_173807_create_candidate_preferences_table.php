<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCandidatePreferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidate_preferences', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('sexOfPotentialCandidate')->nullable();
            $table->integer('minAgeOfPotentialCandidate')->nullable();
            $table->integer('maxAgeOfPotentialCandidate')->nullable();
            $table->integer('minHeightOfPotentialCandidate')->nullable();
            $table->integer('maxHeightOfPotentialCandidate')->nullable();
            $table->integer('minWeightOfPotentialCandidate')->nullable();
            $table->integer('maxWeightOfPotentialCandidate')->nullable();
            $table->string('cityOfPotentialCandidate')->nullable();
            $table->string('wishedStatusPotentialCandidate')->nullable();
            $table->string('religionOfPotentialCandidate')->nullable();
            $table->string('smokingStatusOfPotentialCandidate')->nullable();
            $table->string('eyeColorOfPotentialCandidate')->nullable();
            $table->string('hairColorOfPotentialCandidate')->nullable();
            $table->string('bodyOfPotentialCandidate')->nullable();
            $table->string('apperanceOfPotentialCandidate')->nullable();
            $table->string('clothingOfPotentialCandidate')->nullable();
            $table->string('BodyArtOfPotentialCandidate')->nullable();
            $table->string('jobOfPotentialCandidate')->nullable();
            $table->string('livingStyleOfPotentialCandidate')->nullable();
            $table->string('vehicleOfPotentialCandidate')->nullable();
            $table->integer('numOfChildrenOfPotentialCandidate')->nullable();
            $table->string('monthlyIncomeOfPotentialCandidate')->nullable();
            $table->bigInteger('userId')->index();

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
        Schema::dropIfExists('candidate_preferences');
    }
}
