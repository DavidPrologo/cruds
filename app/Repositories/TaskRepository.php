<?php
namespace App\Repositories;

class TaskRepository{
    private static $data = [
        ['id'=>1, 'checked'=>true , 'description'=> 'um'  ,'date' => '2012-23-12'],
        ['id'=>2, 'checked'=>false, 'description'=> 'dois','date' => '2012-23-12'],
        ['id'=>3, 'checked'=>true , 'description'=> 'três','date' => '2012-23-12']
    ];
    public function all(){
        return self::$data;
    }
    public function store(StoreTaskRequest $request){
        return $request;
    }
}