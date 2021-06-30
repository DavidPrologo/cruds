<?php

namespace App\Http\Controllers\Api;

use \App\Http\Controllers\Controller;
use \App\Repositories\TaskRepository;
use \App\Http\Request\Task\StoreTaskRequest;

class TaskController extends Controller{
    
    public function __construct(TaskRepository $taskRepository){
        $this->taskRepository = $taskRepository;
    }

    public function index(){
        return $this->taskRepository->all();
    }
    public function store(StoreTaskRequest $request){
       
        $user = $this->taskRepository->store($request);

        return response()->json(['user' => $user], 201);
    }
    public function update(UpdateTaskRequest $request, int $id){
        $user = $this->taskRepository->findById($int);
        $user->update($request);
        return response()->json();
    }
    public function destroy(){

    }
}