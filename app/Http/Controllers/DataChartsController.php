<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataChartsController extends Controller
{
    //
    public function show()
    {
        /*Getting the total number of users. */
        $counter = User::select('id')
            ->where('is_admin', '!=', '1')
            ->count();

        /*Getting the number of users who have answered the survey. */

        $answered = Answer::select('user_id')->get();
        $collection = collect($answered);

        $unique = $collection->unique('user_id');

        return ['totalUsers' => $counter, 'completedUsers' => count($unique)];
    }

    public function all_data()
    {
        /*FIRST GETTING DATA ABOUT THE CATEGORIES.*/

        /*Very happy has a score of 100, Happy-80, Neutral -60, Unhappy-40 and Very Unhappy-20 */

        /*The aim is to get the total number of each scores for each category, for instance, how
        many Very Happy's(100) do we have under Equitable Treatment, how many under Mutual Support etc*/


        $very_happy = Answer::select('answer_value', 'category_name')
            ->join('category_questions', 'answers.category_id', '=', 'category_questions.category_id')
            ->where('answer_value', 100)
            ->get();

        $happy = Answer::select('answer_value', 'category_name')
            ->join('category_questions', 'answers.category_id', '=', 'category_questions.category_id')
            ->where('answer_value', 80)
            ->get();
        $neutral = Answer::select('answer_value', 'category_name')
            ->join('category_questions', 'answers.category_id', '=', 'category_questions.category_id')
            ->where('answer_value', 60)
            ->get();

        $unhappy = Answer::select('answer_value', 'category_name')
            ->join('category_questions', 'answers.category_id', '=', 'category_questions.category_id')
            ->where('answer_value', 40)
            ->get();
        $very_unhappy = Answer::select('answer_value', 'category_name')
            ->join('category_questions', 'answers.category_id', '=', 'category_questions.category_id')
            ->where('answer_value', 20)
            ->get();

        #1. very happy's(100) and grouping them by their category names.
        $hundred = collect($very_happy);
        $filtered_hundred = $hundred->groupBy('category_name');


        #2. happy's(80) and grouping them by their category names.
        $eighty = collect($happy);
        $filtered_eighty = $eighty->groupBy('category_name');

        #3. neutral's(60) and grouping them by their category names.
        $sixty = collect($neutral);
        $filtered_sixty = $sixty->groupBy('category_name');

        #4. unhappy's(40) and grouping them by their category names.
        $forty = collect($unhappy);
        $filtered_forty = $forty->groupBy('category_name');


        #5.Very unhappy's(20) and grouping them by their category names.
        $twenty = collect($very_unhappy);
        $filtered_twenty = $twenty->groupBy('category_name');


        /*The follwing function will count the length of each array for each category name. For instance,
$filtered_hundred is an associate array where the keys are the category names and the values
are arrays. Its the length of those arrays for each category name 
we are trying to find.*/

        function count_items($par)
        {
            $collection = collect($par);
            $counted = $collection->map(function ($item, $key) {
                return count($item);
            });
            return $counted;
        }


        $category_data = [
            'Very Happy' => count_items($filtered_hundred),
            'Happy' => count_items($filtered_eighty),
            'Neutral' => count_items($filtered_sixty),
            'Unhappy' => count_items($filtered_forty),
            'Very Unhappy' => count_items($filtered_twenty)
        ];


        /*SECOND GETTING DATA ABOUT THE EMPLOYEES E.G POSITION, GENDER ETC.*/

        /*the query is a bit complex, so we're using the raw query builder */
        $user_data = DB::table('users')
            ->select(DB::raw('id,position_at_company,gender,education,round(datediff(current_date,start_at_company)/365) as years_at_company,year(date_of_birth) as age'))
            ->get();


        /*The folloing function groups the data by a given name and then counts the number of elements per group name. */
        function count_keys($par, $data)
        {
            $user_collection = collect($data);


            /*grouping the user_data by position_at_company, gender, age etc */
            $users_grouped = $user_collection->groupBy($par);
            $my_arr = [];
            /*counting the number of elements for each key/group name */
            foreach ($users_grouped as $key => $val) {
                $my_arr[$key] = count($val);
            }
            return $my_arr;
        }
        $user_analysed = [
            'years_at_company' => count_keys('years_at_company', $user_data),
            'gender' => count_keys('gender', $user_data),
            'age' => count_keys('age', $user_data),
            'position_at_company' => count_keys('position_at_company', $user_data),
            'education' => count_keys('education', $user_data)
        ];

        /*SINCE ALL THE DATA HAS BE COLLECTED, WE NOW SUBMIT IT */

        return [
            'category_data' => $category_data,
            'user_analysed' => $user_analysed
        ];
    }
}
