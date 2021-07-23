<?php

namespace App\Http\Controllers\Api;

use \App\Http\Controllers\Controller;
use \App\Repositories\TaskRepository;
use \App\Http\Requests\TaskRequest;

class TaskController extends Controller{
    
    public function __construct(TaskRepository $taskRepository){
        
        $this->taskRepository = $taskRepository;
    }

    public function index(){
        
        $tasks = $this->taskRepository->all();
        return response()->json($tasks, 201);
    }
    public function store(TaskRequest $request){
       
        $task = $this->taskRepository->store($request->all());
        return response()->json($task, 201);
    }
    public function show(int $id){

        $task = $this->taskRepository->findById($id);
        return response()->json($task, 201);
    }
    public function update(TaskRequest $request, int $id){
        
        $task = $this->taskRepository->findById($id);
        $task->update($request);
        return response()->json($task, 201);
    }
    public function destroy(int $id){
        
        $task = $this->taskRepository->findById($id);
        $result = $task->delete();
        return response()->json(["ok" => $result], 201);
    }
}