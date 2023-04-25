<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/text', function () {
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://web.efaservice.com/api/v1/login',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>'{
            "username": "zbr-api",
            "password": "09354491199"
        }',
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'Accept: application/json'
        ),
    ));

    $token = curl_exec($curl);

    $data = [
        "shop_order_code"=> "124",
        "no_delivery"=> false,
        "first_name"=> "محمد",
        "last_name"=> "محمدی",
        "city_id"=> 2523,
        "province_id"=> 3,
        "info"=> [
            "mobile"=> "09367832687",
            "address"=> "test",
            "unit"=> "2",
            "no"=> "1",
            "zip_code"=> "1234567891"
        ],
        "comment"=> "test",
        "has_packing"=> true,
        "has_cod"=> true,
        "has_pod"=> true,
        "cod_price"=> 2450526,
        "courier_id"=> 1,
        "delivery_at"=> date("Y-m-d H:i:s", time() + 86400),
        "wares" => [
            [
                "shop_ware_code" => "n3209-3",
                "count" => 1,
                "per_price" => 2450526
            ]
        ]
    ];

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://web.efaservice.com/api/v1/orders',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($data, true),
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: ' . $token
        ),
    ));

    $response = curl_exec($curl);
    return json_decode($response);
    return 'Hi this is test route.';
});

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
