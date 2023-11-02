<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// under route /api/v1
$router->group(['prefix' => 'api/v1'], function () use ($router) {
    // under route /api/v1/pizza
    $router->group(['prefix' => 'pizza'], function () use ($router) {
        $router->get('/', 'PizzaController@index');
        $router->post('/', 'PizzaController@store');
        $router->get('/{id}', 'PizzaController@show');
        $router->put('/{id}', 'PizzaController@update');
        $router->delete('/{id}', 'PizzaController@destroy');
    });
    // under route /api/v1/ingredient
    $router->group(['prefix' => 'ingredient'], function () use ($router) {
        $router->get('/', 'IngredientController@index');
        $router->post('/', 'IngredientController@store');
        $router->get('/{id}', 'IngredientController@show');
        $router->put('/{id}', 'IngredientController@update');
        $router->delete('/{id}', 'IngredientController@destroy');
    });
});

$router->get('/', function () use ($router) {
    return response()->json([
        'message' => 'About...',
        'data' => [
            'author' => 'Hansel Ramos Osorio',
            'authorEmail' => 'hansell.ramos@gmail.com',
            'copyright' => '2023'
        ]
    ]);
});
