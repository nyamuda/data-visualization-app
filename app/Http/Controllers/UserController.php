<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    //
    public function show()
    {
        $all_users = User::select('id', 'first_name', 'second_name', 'email', 'gender', 'education', 'position_at_company', 'start_at_company', 'date_of_birth')
            ->where('is_admin', 0)
            ->orderBy('id')
            ->get();

        return $all_users;
    }

    public function one_user(Request $request)
    {
        $user = User::select('id', 'first_name', 'second_name', 'email', 'gender', 'education', 'position_at_company', 'start_at_company', 'date_of_birth')
            ->where('id', $request->user_id)
            ->get();

        return $user;
    }
    public function update_user(Request $request)
    {

        $validatedData = $request->validate(
            [
                'first_name' => 'required|max:255',
                'second_name' => 'required|max:255',
                'date_of_birth' => 'date',
                'start_at_company' => 'date',
                'position_at_company' => 'required',
                'gender' => 'required',
                'education' => 'required',
                'email' => "required|email|unique:users,email,$request->id",

            ],
            [
                'start_at_company.date' => 'Date required.',
                'date_birth.date' => 'D.O.B required.',
                'gender.required' => 'Gender required.',
                'education.required' => 'Education required.',
                'position_at_company.required' => 'Position required.',
            ]
        );
        User::where('id', $request->id)
            ->update([
                'first_name' => $request->first_name,
                'second_name' => $request->second_name,
                'email' => $request->email,
                'date_of_birth' => $request->date_of_birth,
                'position_at_company' => $request->position_at_company,
                'start_at_company' => $request->start_at_company,
                'gender' => $request->gender,
                'education' => $request->education,
            ]);
    }
}
