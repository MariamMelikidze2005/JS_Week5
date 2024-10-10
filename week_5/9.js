// დავწეროთ ფუნქცია, რომელიც დაბეჭდავს 10 შემთხვევით მთელ რიცხვს
// პარამეტრებად გადაცემულ [a, b] მთელი შუალედიდან.
function task(a, b) {
    for (let i = 0; i < 10; i++) {
        let r = Math.random() * (b - a + 1) + a
        let result = Math.floor(r) 
        console.log(result)
    }
}

let a = 5
let b = 10
task(a, b)

