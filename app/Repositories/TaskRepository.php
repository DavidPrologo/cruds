<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use \App\Models\Task;
class TaskRepository extends BaseRepository{

    public function __construct(Task $model)
    {
        parent::__construct($model);
    }
}