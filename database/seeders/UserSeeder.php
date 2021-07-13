<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'first_name' => 'admin',
            'second_name' => 'admin',
            'date_of_birth' => '2021-05-06',
            'start_at_company' => '2020-05-06',
            'gender' => 'male',
            'position_at_company' => 'Supervisor',
            'education' => 'Matric',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin'),
            'is_admin' => 1,

        ]);
    }
}
