<?php

namespace Database\Seeders;

use App\Models\Pizza;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pizza = new \App\Models\Pizza([
            'name' => 'Fun Pizza',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tempus ipsum, a elementum ligula. Etiam aliquet mollis ipsum id faucibus. Curabitur id felis non orci blandit auctor ut nec metus. Vestibulum aliquam scelerisque orci in laoreet. Donec vitae ornare lectus, at iaculis justo. Pellentesque tincidunt eu turpis at dignissim.',
            'image' => 'pizza-fun.jpg'
        ]);
        $pizza->save();
        $pizza->ingredients()->attach([1, 2, 3, 4, 5, 6, 7]);

        $pizza = new \App\Models\Pizza([
            'name' => 'Super Mushroom Pizza',
            'description' => 'Maecenas lacinia efficitur eros a vehicula. Nam placerat blandit pulvinar. Praesent ullamcorper elit et enim feugiat, in tempus urna cursus. Etiam et arcu vitae sem tempus fringilla. Mauris at lorem nisl. Nam euismod augue id ligula malesuada viverra. Mauris pulvinar diam nec auctor accumsan.',
            'image' => 'pizza-mushrooms.jpg'
        ]);
        $pizza->save();
        $pizza->ingredients()->attach([1, 8, 6, 2, 7]);

    }
}
