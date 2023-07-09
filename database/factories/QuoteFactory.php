<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quote>
 */
class QuoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $API_KEY = "X-Api-Key: d0y0v/G38ZVJ32NsRLy0cg==iHJuc8p31nc70Vas";

        $url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

        $conn = curl_init($url);

        curl_setopt($conn, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($conn, CURLOPT_HTTPHEADER, [$API_KEY]);

        $result = curl_exec($conn);
        curl_close($conn);


        $content = json_decode($result);

        return [
            'konten' => $content[0]->quote,
        ];
    }
}