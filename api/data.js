let MyData = {
    fName: "Ahmed",
    lName: "Raza",
    age: 21,
    qualification: "Associate Engineer"
}

// console.log(MyData.fName);


// let { fName, lName, age, qualification } = MyData;
// console.log(fName,lName);

// console.log("My first name:",fName,"and My last name:",lName);


let apidata = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 101,
    "public_gists": 5,
    "followers": 37087,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-12-30T20:55:07Z"
}

// console.log(apidata.public_gists,apidata.created_at);

// let { public_gists, followers, email, hireable } = apidata;
// console.log(public_gists,followers);

/////////////////////////////////////////////////another data


let apidata2 = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": " Jennie",
                "last": " Nichols"
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
}

// console.log(apidata2.results[0].name);

// let { title, first, last } = apidata2.results[0].name;
// console.log("Full Name:", title, first, last);

// console.log(apidata2.results[0].location.postcode);

let {number,name}=apidata2.results[0].location.street;
// console.log(number,name);

let {gender}=apidata2.results[0];
let {title,first,last}=apidata2.results[0].name;
let {city,state,country,postcode}=apidata2.results[0].location
let {email}=apidata2.results[0]
let {username,password}=apidata2.results[0].login
let {age}=apidata2.results[0].dob;
let {phone}=apidata2.results[0];
let {large:image}=apidata2.results[0].picture;

let alldata=`
    Name:${title}${first}${last}
    Gender:${gender}
    Address:${city},${state},${country},${postcode}
    Email:${email}
    Login Details:[username :${username},password :${password}]
    Age:${age}
    Cell:${phone}
    Image:${image}`

console.log(alldata);



// console.log(
//     "Name:",title,first,last,
//     "Gender:",gender,
//     "Address:",city,state,country,postcode,
//     "Email:",email,
//     "Login Details:",loginD,
//     "Age:",age,
//     "Cell:",phone,
//     "Image:",image
// );









