function task(){
    const r = Math.floor(Math.random() * 7);


    if(r == 0){
        return 'Monday';
    }
    else if(r == 1){
        return 'Tuesday';
    }
    else if(r == 2){
        return 'Wednesday';
    }
    else if(r == 3){
        return 'Thursday';
    }
    else if(r == 4){
        return 'Friday';
    }
    else if(r == 5){
        return 'Saturday';
    }
    else if(r == 6){
        return 'Sunday';
    }
}

console.log(task())
