<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use App\Models\SurveyType;

class SurveyTypesController extends Controller
{
    //
    public function show()
    {
        //logged in user id
        $user_id = Auth::id();
        //getting the questions the logged in user has answered
        $answered_questions = Answer::select('question_id')
            ->where('user_id', $user_id)
            ->get();

        //getting the survey_type names for the questions the user hasn't answered yet.
        $all_surveys = Question::select('survey_type_name', 'survey_types.id')
            //join with the category table
            ->join('category_questions', 'category_questions.category_id', '=', 'questions.category_id')
            //then join with the  survey_types table
            ->join('survey_types', 'survey_types.id', '=', 'category_questions.survey_type_id')
            ->whereNotIn('question_id', $answered_questions)
            ->distinct()
            ->orderBy('survey_type_name')
            ->get();


        return $all_surveys;
    }

    public function store(Request $request)
    {
        $request->validate([
            'surveyName' => 'required|unique:survey_types,survey_type_name'
        ], ['surveyName.required' => 'Required.']);

        SurveyType::create([
            'survey_type_name' => $request->surveyName,
        ]);
    }
}
