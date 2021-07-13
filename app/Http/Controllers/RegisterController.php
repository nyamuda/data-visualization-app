<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|max:255',
            'second_name' => 'required|max:255',
            'date_birth' => 'date',
            'start_at_company' => 'date',
            'position_at_company' => 'required',
            'gender' => 'required',
            'education' => 'required',
            'email' => 'required|unique:users|email',
            'password' => 'required|regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/|confirmed'
        ], [
            'password.regex' => 'the password must contain a minimum of eight characters, at least one letter and one number.'
        ]);

        User::create([
            'first_name' => $request->first_name,
            'second_name' => $request->second_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'date_of_birth' => $request->date_birth,
            'position_at_company' => $request->position_at_company,
            'start_at_company' => $request->start_at_company,
            'gender' => $request->gender,
            'education' => $request->education,

        ]);
    }
    /*
    public function show()
    {
        //creating a default user in case there is none in the database.
        $password = 'dad88zvu9';
        $default_user = User::firstOrNew([
            'name' => 'Pierce',
            'email' => 'ptnrlab@gmail.com',
            'password' => Hash::make($password)
        ]);

        $default_user->save();
    }
8*/
}
