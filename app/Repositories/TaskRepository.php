<?php
namespace App\Repositories;

class TaskRepository{
    public function all(){
        return [
            ['checked'=>true, 'discription'=> 'um','date' => '2012-23-12'],
            ['checked'=>false, 'discription'=> 'dois','date' => '2012-23-12'],
            ['checked'=>true, 'discription'=> 'três','date' => '2012-23-12']
        ];
    }
}