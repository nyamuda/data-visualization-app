<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $table = "category_questions";
    use HasFactory;

    protected $fillable = ['category_name', 'type', 'category_description'];

    /* There is one-many relationship between the Category and Question model.
    A category can have many questions. 
    Thus the Question model is on the many side of the relationship.
    */
    public function questions()
    {
        return $this->hasMany(Question::class, 'category_id', 'category_id');
    }
}
