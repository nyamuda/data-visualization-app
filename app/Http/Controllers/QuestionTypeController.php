<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuestionType;
use App\Models\SurveyType;
use App\Models\Category;

class QuestionTypeController extends Controller
{
    /*Checking if the following records exist in the database. If they don't, we
    create new instances of our model using the firstOrNew method and save
    them to the database
    */
    //
    public function show()
    {
        /* FIRST WE CREAT THE QUESTION TYPES NAMES AND SAVE THEM TO THE DATABASE  */
        $type1 = QuestionType::firstOrNew([
            'question_type_name' => 'Multiple Choice'
        ]);
        $type1->save();

        $type2 = QuestionType::firstOrNew([
            'question_type_name' => 'Scale'
        ]);
        $type2->save();

        $type3 = QuestionType::firstOrNew([
            'question_type_name' => 'Open Ended'
        ]);
        $type3->save();

        $question_types = [$type1, $type2, $type3];


        /*NOW WE GET THE SURVEY NAMES FROM THE DATABASE*/

        $survey_names = SurveyType::select('id', 'survey_type_name')->get();




        return ['question_type_names' => $question_types, 'survey_names' => $survey_names];
    }
}
