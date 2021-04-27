<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

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
}
