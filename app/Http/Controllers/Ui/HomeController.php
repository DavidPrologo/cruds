<?php

namespace App\Http\Controllers\Ui;

class HomeController extends Controller{
    
    public function index(){
        return view('index');
    }
}