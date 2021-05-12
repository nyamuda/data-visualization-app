<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SurveyType;

class SurveyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 
        SurveyType::create([
            'survey_type_name' => 'Diversity and Inclusion',
        ]);
    }
}
