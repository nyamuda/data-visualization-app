<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;



class SurveyQuestionsController extends Controller
{
    //fetching survey questions from the database
    public function show()
    {
        $all_questions = Question::all();

        return $all_questions;
    }

    //save a question to the database
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|unique:questions',
            'cat_val' => 'required|numeric'
        ]);

        Question::create([
            'question' => $request->question,
            'category_id' => $request->cat_val
        ]);
    }
}