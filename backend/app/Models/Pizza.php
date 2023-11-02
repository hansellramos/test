<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

/**
 * @property string $name
 * @property string $description
 * @property string $image
 */
class Pizza extends Model
{
    public $table = 'pizza';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name', 'description', 'image'
    ];

    public $timestamps = false;

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'pizza_ingredient', 'pizza_id', 'ingredient_id');
    }

}
