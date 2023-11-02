<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // 1
        $tomato = new \App\Models\Ingredient([
            'name' => 'Tomato',
            'price' => 0.5,
            'unit' => 'g',
            'icon' => 'tomato.svg'
        ]);
        $tomato->save();

        // 2
        $mushrooms = new \App\Models\Ingredient([
            'name' => 'Mushrooms',
            'price' => 0.5,
            'unit' => 'g',
            'icon' => 'mushroom.svg'
        ]);
        $mushrooms->save();

        // 3
        $cheese = new \App\Models\Ingredient([
            'name' => 'Feta Cheese',
            'price' => 1.0,
            'unit' => 'g',
            'icon' => 'cheese.svg'
        ]);
        $cheese->save();

        // 4
        $sausage = new \App\Models\Ingredient([
            'name' => 'Sausages',
            'price' => 1.0,
            'unit' => 'g',
            'icon' => 'sausage.svg'
        ]);
        $sausage->save();

        // 5
        $onion = new \App\Models\Ingredient([
            'name' => 'Sliced Onion',
            'price' => 0.5,
            'unit' => 'g',
            'icon' => 'onion.svg'
        ]);
        $onion->save();

        // 6
        $cheese = new \App\Models\Ingredient([
            'name' => 'Mozzarela Cheese',
            'price' => 0.5,
            'unit' => 'g',
            'icon' => 'cheese.svg'
        ]);
        $cheese->save();

        // 7
        $oregano = new \App\Models\Ingredient([
            'name' => 'Oregano',
            'price' => 1.5,
            'unit' => 'g',
            'icon' => 'herb.svg'
        ]);
        $oregano->save();

        // 8
        $bacon = new \App\Models\Ingredient([
            'name' => 'bacon',
            'price' => 1.5,
            'unit' => 'g',
            'icon' => 'bacon.svg'
        ]);
        $bacon->save();

    }
}
