<?php
namespace App\Repositories;

class TaskRepository{
    private static $data = [
        ['checked'=>true, 'discription'=> 'um','date' => '2012-23-12'],
        ['checked'=>false, 'discription'=> 'dois','date' => '2012-23-12'],
        ['checked'=>true, 'discription'=> 'três','date' => '2012-23-12']
    ];
    public function all(){
        return self::$data;
    }
    public function store(StoreTaskRequest $request){
        return $request;
    }
}