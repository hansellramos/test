<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PizzaController extends Controller
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
        return \App\Models\Pizza::all()->load('ingredients');
    }

    public function show($id)
    {
        // return object or 404 http code
        $pizza = \App\Models\Pizza::find($id);
        if (!$pizza) {
            return response()->json(['message' => 'Pizza not found'], 404);
        }
        return $pizza->load('ingredients');
    }

    public function store(Request $request)
    {
        $pizza = new \App\Models\Pizza;
        $pizza->name = $request->name;
        $pizza->description = $request->description;
        $pizza->image = $request->image;
        $pizza->save();
        return $pizza;
    }

    public function update(Request $request, $id)
    {
        $pizza = \App\Models\Pizza::find($id);
        if (!$pizza) {
            return response()->json(['message' => 'Pizza not found'], 404);
        }
        $pizza->name = $request->name;
        $pizza->description = $request->description;
        $pizza->image = $request->image;
        $pizza->save();
        // ingredients
        $ingredients = $request->ingredients;
        if ($ingredients) {
            $pizza->ingredients()->sync(array_column($ingredients, 'id'));
        }
        return $pizza;
    }

    public function destroy($id)
    {
        $pizza = \App\Models\Pizza::find($id);
        if (!$pizza) {
            return response()->json(['message' => 'Pizza not found'], 404);
        }
        $pizza->delete();
        return $pizza;
    }
}
