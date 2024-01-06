const student1 = {

    name : "Shreyas",
    roll : 64,
    eng : 99,
    math : 100,
    getAvg(){
        let avg = (this.eng + this.math)/2;
        console.log(avg);
    }

}

const student2 = {

    name : "Jyotendra",
    roll : 32,
    eng : 100,
    math : 99,
    getAvg(){
        let avg = (this.eng + this.math)/2;
        console.log(avg);
    }

}