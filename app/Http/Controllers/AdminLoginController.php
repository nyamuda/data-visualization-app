<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class AdminLoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'email|required',
            'password' => 'required',
            'is_admin' => 'required|numeric'
        ],);

        $credentials = $request->only('email', 'password', 'is_admin');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return  response()->json(Auth::user(), 200);
        }
        throw ValidationException::withMessages([
            'email' => ['Admin credentials incorrect.'],
            'password' => ['Admin credentials incorrect.']
        ]);
    }
    public function logout_admin()
    {
        Auth::logout();
    }
}
