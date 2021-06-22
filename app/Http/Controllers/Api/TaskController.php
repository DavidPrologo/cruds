<?php

namespace App\Http\Controllers\Api;

use \App\Http\Controllers\Controller;
use \App\Repositories\TaskRepository;

class TaskController extends Controller{
    
    public function __construct(TaskRepository $taskRepository){
        $this->taskRepository = $taskRepository;
    }

    public function index(){
        return $this->taskRepository->all();
    }
    public function store(){

    }
    public function update(){

    }
    public function destroy(){

    }
}