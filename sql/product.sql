CREATE TABLE   IF NOT EXISTS  `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `p_info` JSON DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` set name='Camping Lantern', price='0',p_info='{
    "name": "Camping Lantern",
    "price": "0",
    "Project Description": [
        {
            "value": "High quality plastic shell, glass top, stainless steel hand shanks, shockproof and durable."
        },
        {
            "value": "Put the lamp in the sun, it will be charged, 3 hours lighting once fully charged."
        },
        {
            "value": "Can be charged by AC charging cord."
        },
        {
            "value": "When stretching it, light will be on, shrinking it back, light will be off."
        },
        {
            "value": "Red indicator displays charging condition."
        },
        {
            "value": "Safety energy saving, portable, high brightness."
        },
        {
            "value": "Used for camping, reading, boating, fishing, car repairs, etc."
        },
        {
            "value": "Waterproof"
        },
        {
            "value": "Stainless steel handle and plastic cover resistant to water, suitable for both indoor and outdoor lighting."
        }
    ],
    "Project Details": [
        {
            "value": "Best Use: Hiking, Travel, Backpacking, Camping"
        },
        {
            "value": "Features: Portable, Rechargeable, Low Energy Consumption"
        },
        {
            "value": "Power Source: Battery, Solar"
        },
        {
            "value": "Material: Plastic"
        },
        {
            "value": "Functions: Low Power Consumption, Long life, Bright and no Stroboscopic"
        },
        {
            "value": "Power Source: AC Charging, Solar Power"
        },
        {
            "value": "Led Quantity: 6(5LEDS+1W)"
        }
    ],
    "Package Contains": [
        {
            "value": "1x Solar Camping Light(Include the battery)"
        },
        {
            "value": "1x Charger Cable (AC)"
        }
    ]
}';
