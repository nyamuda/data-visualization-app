<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    //


    /*Checking if the following records exist in the database. If they don't, we
    create new instances of our model using the firstOrNew method and save
    them to the database
    */
    public function show()
    {
        $category_1 = Category::firstOrNew([
            'category_name' => 'Equitable Treatment'
        ]);

        $category_1->save();

        $category_2 = Category::firstOrNew([
            'category_name' => 'Confidence in Redress'
        ]);
        $category_2->save();

        $category_3 = Category::firstOrNew([
            'category_name' => 'Workplace Fairness'
        ]);

        $category_3->save();

        $category_4 = Category::firstOrNew([
            'category_name' => 'Mutual Support'
        ]);

        $category_4->save();

        $category_5 = Category::firstOrNew([
            'category_name' => 'Organizational Belonging'
        ]);

        $category_5->save();

        $category_6 = Category::firstOrNew([
            'category_name' => ' General'
        ]);

        $category_6->save();


        $allCategories = [
            'category_1' => $category_1,
            'category_2' => $category_2,
            'category_3' => $category_3,
            'category_4' => $category_4,
            'category_5' => $category_5,
            'category_6' => $category_6
        ];
        //sending the record to the get request
        return $allCategories;

        /*
        $validatedData = $request->validate([
            'category_name' => 'required|max:100',
        ]);

        //  dd($request->category_name);

        Category::create([
            'category_name' => $request->category_name,
        ]);*/
    }
}