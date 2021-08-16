<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SurveyQuestionsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\DataChartsController;
use App\Http\Controllers\SurveyTypesController;
use App\Http\Controllers\QuestionTypeController;

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


Route::get('/admin_auth', function (Request $request) {
    return $request->user();
})->middleware('admin');



Route::post('/register', [RegisterController::class, 'store']);
//Route::get('/add_default_user', [RegisterController::class, 'show']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/admin_login', [AdminLoginController::class, 'login']);
Route::post('/admin_logout', [AdminLoginController::class, 'logout_admin']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::get('/questions', [SurveyQuestionsController::class, 'index']);
Route::post('/add_question', [SurveyQuestionsController::class, 'store']);


Route::post('/add_survey', [SurveyTypesController::class, 'store']);


Route::post('/add_category', [CategoryController::class, 'store']);



Route::get('/get_questions', [SurveyQuestionsController::class, 'show']);
Route::get('/unanswered_categories', [SurveyQuestionsController::class, 'userCategories']);
Route::get('/unanswered_surveys', [SurveyTypesController::class, 'show']);
Route::get('/get_names', [QuestionTypeController::class, 'show']);
Route::post('/add', [SurveyQuestionsController::class, 'add']);
Route::get('/users_completed_survey', [DataChartsController::class, 'show']);
Route::get('/data_for_analysis', [DataChartsController::class, 'all_data']);
