@extends('layouts.layout')

@section('content')

    <div class="mt-10">
        <form class="my-form rounded-sm m-auto flex flex-col border-2 border-gray-200 shadow-2xl p-8" action="">
            <p class="text-center text-2xl">Register New User</p>
            <input
                class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2 mt-4"
                id="user_name" name="name" type="text" placeholder="Name" />
            <input
                class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2 mt-4"
                id="user_email" name="email" type="text" placeholder="Email" />

            <input
                class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2 mt-4"
                id="user_password" name="password" type="password" placeholder="Password" />
            <input
                class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2 mt-4"
                id="user_password_confirmation" name="password_confirmation" type="password"
                placeholder="Confirm Password" />

            <button
                class="focus:outline-none bg-green-500 rounded-sm w-auto hover:bg-green-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                type="submit">
                Register
            </button>
        </form>
    </div>
@endsection
