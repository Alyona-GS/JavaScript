user.age >= 18 && user.age <= 35 &&

(user.paid &&
!user.blocked &&
!user.badUsername ||

user.isAdmin) ?

console.log('Access is allowed') :
console.log('Access is denied');