<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SurveyQuestionsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AdminLoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});





Route::post('/register', [RegisterController::class, 'store']);
//Route::get('/add_default_user', [RegisterController::class, 'show']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/admin_login', [AdminLoginController::class, 'login']);
Route::post('/admin_logout', [AdminLoginController::class, 'logout_admin']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::get('/questions', [SurveyQuestionsController::class, 'index']);
Route::post('/add_question', [SurveyQuestionsController::class, 'store']);
Route::get('/get_questions', [SurveyQuestionsController::class, 'show']);
Route::get('/get_categories', [CategoryController::class, 'show']);
Route::post('/add', [SurveyQuestionsController::class, 'add']);