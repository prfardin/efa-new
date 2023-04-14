<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>EFP - New</title>

        <!-- Fonts -->

        <!-- Styles -->

        <!-- Scripts and CSS import -->
        <!-- rtl source: /src/cache/default-rtl.less -->
        @vite(['resources/back-office/src/less/default.less', 'resources/back-office/main.ts'], 'back-office/build')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
