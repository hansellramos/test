<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IngredientController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        return \App\Models\Ingredient::all();
    }

    public function show($id)
    {
       $ingredient = \App\Models\Ingredient::find($id);
       if (!$ingredient) {
           return response()->json(['message' => 'Ingredient not found'], 404);
       }
       return $ingredient;
    }

    public function store(Request $request)
    {
        $ingredient = new \App\Models\Ingredient;
        $ingredient->name = $request->name;
        $ingredient->price = $request->price;
        $ingredient->unit = $request->unit;
        $ingredient->icon = $request->icon;
        $ingredient->save();
        return $ingredient;
    }

    public function update(Request $request, $id)
    {
        $ingredient = \App\Models\Ingredient::find($id);
        if (!$ingredient) {
            return response()->json(['message' => 'Ingredient not found'], 404);
        }
        $ingredient->name = $request->name;
        $ingredient->price = $request->price;
        $ingredient->unit = $request->unit;
        $ingredient->icon = $request->icon;
        $ingredient->save();
        return $ingredient;
    }

    public function destroy($id)
    {
        $ingredient = \App\Models\Ingredient::find($id);
        if (!$ingredient) {
            return response()->json(['message' => 'Ingredient not found'], 404);
        }
        $ingredient->delete();
        return $ingredient;
    }
}
