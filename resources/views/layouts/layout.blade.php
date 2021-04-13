<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Survey App</title>


    <link rel="stylesheet" href="/css/app.css">

    <!-- Styles -->

    <style>

    </style>
</head>

<body class="antialiased">

    @yield('content')
    <footer class="w-full h-32 bg-gray-800 text-gray-100 text-center object-bottom text-xs">
        <div class="h-full flex flex-col justify-center">
            <p class="inset-x-0 bottom-0">&#x000A9;2021. All rights reserved&#160;|&#160;Made by Aptego Software.</p>
        </div>
    </footer>
</body>

</html>
