<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\Answer;



class SurveyQuestionsController extends Controller
{
    //fetching survey questions from the database
    public function show()
    {

        //grouping the questions by their category_id

        $category1_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 1)->get();
        $category2_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 2)->get();
        $category3_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 3)->get();
        $category4_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 4)->get();
        $category5_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 5)->get();
        $category6_questions = Question::select('question_id', 'question', "category_id")->where('category_id', 6)->get();

        $all_questions = [
            'category1_questions' => $category1_questions,
            'category2_questions' => $category2_questions,
            'category3_questions' => $category3_questions,
            'category4_questions' => $category4_questions,
            'category5_questions' => $category5_questions,
            'category6_questions' => $category6_questions,

        ];

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