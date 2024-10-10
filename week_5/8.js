// 8. დავწეროთ ფუნქცია, რომელიც დაბეჭდავს შემთხვევით მთელ რიცხვს
// პარამეტრებად გადაცემული [a, b] მთელი შუალედიდან.
function task (a,b){
    r = Math.random() * (b-a +1) +a
    b = Math.round(r)
    return b
}

let a = 10
let b = 15
console.log(task(a,b))