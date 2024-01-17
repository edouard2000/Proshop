import bcrypt from "bcryptjs"
const users = [{
    name: " Admin Users",
    email: "edouardkwizera2000@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
},

{
    name: " Eduardo",
    email: "edouard2000@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
},
{
    name: "User",
    email: "user2000@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
}
]

export default users; 