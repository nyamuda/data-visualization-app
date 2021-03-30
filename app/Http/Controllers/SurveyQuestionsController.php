<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;



class SurveyQuestionsController extends Controller
{
    //fetching survey questions from the database
    public function index()
    {
        $category_ids = Category::all();

        return $category_ids;
    }
}