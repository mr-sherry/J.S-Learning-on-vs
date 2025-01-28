let apidata2 = {
    "user1": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Jennie",
                "last": "Nichols"
            },
            "location": {
                "street": {
                    "number": 8929,
                    "name": "Valwood Pkwy",
                },
                "city": "Billings",
                "state": "Michigan",
                "country": "United States",
                "postcode": "63104",
                "coordinates": {
                    "latitude": "-69.8246",
                    "longitude": "134.8719"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "jennie.nichols@example.com",
            "login": {
                "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
                "username": "yellowpeacock117",
                "password": "addison",
                "salt": "sld1yGtd",
                "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
                "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
                "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
            },
            "registered": {
                "date": "2007-07-09T05:51:59.390Z",
                "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
                "name": "SSN",
                "value": "405-88-3636"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
        }
    ],
    "user2": [
        {
            "gender": "male",
            "name": {
                "title": "Mr.",
                "first": "Daniel",
                "last": "Rodriguez"
            },
            "location": {
                "street": {
                    "number": 5627,
                    "name": "Sunset Blvd"
                },
                "city": "Los Angeles",
                "state": "California",
                "country": "United States",
                "postcode": "90028",
                "coordinates": {
                    "latitude": "34.0522",
                    "longitude": "-118.2437"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "daniel.rodriguez@example.com",
            "login": {
                "uuid": "a3b2d916-3345-4231-8b5e-5f77bcbcd8f3",
                "username": "bluedolphin92",
                "password": "ocean123",
                "salt": "xj8kLmn3",
                "md5": "9b76b5916b6c0806e276bf2f5fca38cc",
                "sha1": "59dcd657cb8e4d214e30b8d0e5a3c1938a49e832",
                "sha256": "f12f64cda7c3e8e79db66aa2569b40bc202e8edfd9f89dd8857a69f730d98168"
            },
            "dob": {
                "date": "1985-11-15T13:24:17.234Z",
                "age": 38
            },
            "registered": {
                "date": "2010-05-23T10:14:19.892Z",
                "age": 13
            },
            "phone": "(310) 555-7821",
            "cell": "(424) 555-8932",
            "id": {
                "name": "SSN",
                "value": "623-77-8931"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/15.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
            },
            "nat": "US"
        }
    ],
    "user3": [
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Sophia",
                "last": "Johnson"
            },
            "location": {
                "street": {
                    "number": 7821,
                    "name": "Maple Avenue"
                },
                "city": "Chicago",
                "state": "Illinois",
                "country": "United States",
                "postcode": "60614",
                "coordinates": {
                    "latitude": "41.8781",
                    "longitude": "-87.6298"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada)"
                }
            },
            "email": "sophia.johnson@example.com",
            "login": {
                "uuid": "b29e8d89-5b3f-4c34-9e18-734c3a93c79e",
                "username": "greentiger21",
                "password": "mapleleaf",
                "salt": "z7lJ4Knt",
                "md5": "5c1fc7a69d0a8281b4905229c926965b",
                "sha1": "6b9c4f306c1b508c8d6d0d88ed4a888df7e472f2",
                "sha256": "c2b0e0d8cfcd5f8a727d3e5b1ef315ef5b020aeedcd0484624528fbb7e88f88e"
            },
            "dob": {
                "date": "1990-02-20T09:12:43.981Z",
                "age": 33
            },
            "registered": {
                "date": "2015-03-12T15:32:56.345Z",
                "age": 8
            },
            "phone": "(773) 555-1248",
            "cell": "(312) 555-4587",
            "id": {
                "name": "SSN",
                "value": "318-45-7842"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
            },
            "nat": "US"
        }
    ]
}

let func = function (user) {
    let data = apidata2[user][0];

    let { gender } = data;
    let { title, first, last } = data.name;
    let { city, state, country, postcode } = data.location
    let { email } = data
    let { username, password } = data.login
    let { age } = data.dob;
    let { phone } = data;
    let { large: image } = data.picture;

    return `
    Name:       ${title} ${first} ${last}
    Email:      ${email}
    Cell:       ${phone}
    Gender:     ${gender}
    Age:        ${age}
    Image:      ${image}
    Address:    ${city},${state},${country},${postcode}
    ============Login Details==========
    username:   ${username}
    password:   ${password}`
}


console.log(func("user3"));


