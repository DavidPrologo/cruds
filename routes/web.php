<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/ui/{any?}', function () {
    return view('welcome');
})
// ->where('any','.*');
// ->where('any','^((?|api).)*$')
;
Route::group(['prefix'=> 'api'], function(){
    Route::get('/task', [\App\Http\Controllers\Api\TaskController::class, 'index']);
});

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');