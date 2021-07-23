<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository{

    public function __construct(Model $model){
        $this->model = $model;
    }

    public function findById(int $id):Model{
        return $this->model->find($id);
    }

    public function all():array{
        return $this->model->all()->toArray();
    }
    public function store(array $data):Model{
        return $this->model->create($data);
    }
}