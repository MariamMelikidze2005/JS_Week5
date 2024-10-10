    // 10. დავწეროთ ფუნქცია, რომელიც დაბეჭდავს პარამეტრად გადაცემულ n
    // შემთხვევით მთელ რიცხვს ასევე პარამეტრებად გადაცემული [a, b]
    // მთელი შუალედიდან.
    function task(a, b) {
        const n = Math.floor(Math.random() * (b - a + 1)) + a;
        return n;
    }
    
    let a = 10;
    let b = 15;
    console.log(task(a, b));
    
   