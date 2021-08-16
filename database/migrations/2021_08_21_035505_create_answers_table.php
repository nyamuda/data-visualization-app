<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->string('answer_value', 300);
            /*foreign key - there one-many relationship between the users table 
            and the answers table respectively*/
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')
                ->references('id') //referenced column on the parent table
                ->on('users') //table name for parent table
                ->onUpdate('cascade')
                ->onDelete('cascade');
            /*foreign key - there one-many relationship between the questions table 
            and the answers table respectively*/
            $table->unsignedBigInteger('question_id');

            $table->foreign('question_id')
                ->references('question_id') //referenced column on the parent table
                ->on('questions') //table name for parent table
                ->onUpdate('cascade')
                ->onDelete('cascade');
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
        Schema::dropIfExists('groups');
    }
}
