// დავწეროთ ფუნქცია, რომელიც დაბეჭდავს შემთხვევით რიცხვს
// პარამეტრებად გადაცემული [a, b] შუალედიდან.

function task(a,b){
    r = Math.random() * (b - a +1) + a
    return r
}

let a = 10
let b = 15
console.log(task(a, b))