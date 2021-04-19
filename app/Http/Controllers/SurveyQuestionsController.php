<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class SurveyQuestionsController extends Controller
{
    //fetching survey questions from the database
    public function show(Request $request)
    {

        //logged in user id
        $user_id = Auth::id();

        //getting the questions the logged in user has answered
        $answered_questions = Answer::select('question_id')
            ->where('user_id', $user_id)
            ->get();

        //then using that to get the questions the user hasn't answered
        $all_questions = Question::select('question_id', 'question', 'questions.category_id', 'type', 'category_name')
            //join with the category table to get the 'type' and 'category_name'
            ->join('category_questions', 'category_questions.category_id', '=', 'questions.category_id')
            ->whereNotIn('question_id', $answered_questions)->get();


        return $all_questions;
    }
    //save a question to the database
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|unique:questions',
            'cat_val' => 'required|numeric'
        ], [
            'question.unique' => 'The question is already added. Please enter a different question.',
            'cat_val.required' => 'Category is required. Please select the category.'
        ]);
        Question::create([
            'question' => $request->question,
            'category_id' => $request->cat_val
        ]);
    }


    public function add(Request $request)
    {
        $answers = $request->all();
        foreach ($answers as $key => $val) {
            $question_id = $answers[$key]['question_id'];
            $category_id = $answers[$key]['category_id'];
            $answer_value = $answers[$key]['question_answer'];
            $user_id = $answers[$key]['user_id'];

            Answer::create([
                'user_id' => $user_id,
                'question_id' => $question_id,
                'category_id' => $category_id,
                'answer_value' => $answer_value
            ]);
        }
    }
}
