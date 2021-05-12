<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyType extends Model
{
    use HasFactory;

    protected $fillable = ['survey_type_name'];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
