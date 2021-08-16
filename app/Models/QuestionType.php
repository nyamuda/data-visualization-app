<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionType extends Model
{
    use HasFactory;

    protected $fillable = ['question_type_name'];

    public function questions()
    {
        return $this->hasMany(
            Question::class,
            'question_type_id', //foreign key of the questions
            'question_type_id' //primary key of the parent table
        );
    }
}
