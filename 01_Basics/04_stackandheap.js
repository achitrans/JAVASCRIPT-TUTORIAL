//Stack => Primitive (variables copy)
//heap => non primitive (Refrence)

let myYoutubename = "abhilashagmail"
let anothername = "chaiandcode"
anothername = "govind"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi : "user@ybl"

}
let user2 = user1;

user2.email = "abhilashagoogle.com"
user2.upi = "abhilasha"
console.log(user1.email);
console.log(user2.email);
console.log(user1.upi);