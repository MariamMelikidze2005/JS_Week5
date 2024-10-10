// 4. დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ რიცხვს
// დაამრგვალებს, დაამრგვალებს მეტობით ან ნაკლებობით, მეორე
// გადაცემული პა-რამეტრის მიხედვით (მეორე პარამეტრი უნდა იყოს
// ლოგიკური).

function task(a, up) {
    if (up) {
        let b = Math.ceil(a);
        return b;
    } else {
        let b = Math.floor(a);
        return b;
    }
}

let a = 19.8;
console.log(task(a, true));  
console.log(task(a, false)); 
