<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $table = 'programs'; // Assurez-vous que le nom de la table est correct
    public $timestamps = false; 
    protected $fillable = ['name', 'file_path'];
}
