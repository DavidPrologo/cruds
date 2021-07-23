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

Route::get('/web/{any?}', function () {
    return view('welcome');
})
// ->where('any','.*');
// ->where('any','^((?|api).)*$')
;
// Route::group(['prefix'=> 'api', 'namespace' => 'App\\Http\\Controllers\\Api'], function(){
//     Route::get   ('/task'        , 'TaskController@show');
//     Route::post  ('/task'       , 'TaskController@store');
//     Route::get   ('/task/{id}'   , 'TaskController@show');
//     Route::put   ('/task/{id}'    , 'TaskController@store');
//     Route::delete('/task/{id}', 'TaskController@destroy');
// });
