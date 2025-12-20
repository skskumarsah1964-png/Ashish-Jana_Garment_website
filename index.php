<?php

$phone = "9650458770";

if (!empty($phone)) {

    $phone12 = "91" . $phone;

    $url = "https://crmapi.digidonar.in/api/meta/v1/phonenumber/messages";

    // -----template-----
    $data = [
        "to" => $phone12,
        "recipient_type" => "individual",
        "type" => "template",
        "template" => [
            "language" => [
                "policy" => "deterministic",
                "code" => "en"
            ],
            "name" => "new_enquiry_your_interest_in_nissan_magnite",
            "components" => []
        ]
    ];

    $headers = [
        "Content-Type: application/json",
        "Authorization: Bearer 2ytDDhaUYzkUYBMW0lHkdiEJTqjVU5ERVJTQ09SRQ9iDWKsRvRCWKyoN0gdJQXlHWMo7oM6CXkvSneULUkdLWglHcREFTSAWVDVU5ERVJTQ09SRQB59REFTSAYzEVU5ERVJTQ09SRQ2SfZqT29Pl8jbILpglaBRSBiswFnCcKfVk"
    ];

    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_POSTFIELDS => json_encode($data)
    ]);

    $response = curl_exec($curl);

    if (curl_errno($curl)) {
        echo "Curl Error: " . curl_error($curl);
    } else {
        echo $response;
    }

    curl_close($curl);
}

