<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RecetteController;
use App\Http\Controllers\ProgramsController;
use App\Models\Product;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [UserController::class, 'register']);
Route::post('login',[UserController::class,'login']);
Route::post('addcoachs',[ProductController::class,'addcoachs']);
Route::post('addrecette',[RecetteController::class,'addrecette']);
Route::get('coachslist',[ProductController::class,'coachslist']);
Route::get('recettelist',[RecetteController::class,'recettelist']);
Route::delete('delete/{id}',[ProductController::class,'delete']);
Route::post('addprograms',[ProgramsController::class,'addprograms']);
Route::get('programslist',[ProgramsController::class,'programslist']);
