class Exam{
    weight=2
    gabarito=['a','b','a','c','d']
    
    constructor(exam){
        this.allExam= exam
    } 
    add(exam){
        this.allExam.push(exam)
    }
    avg(){
        let count = 0
        this.allExam.forEach((row) => {
            const isEqual = this.gabarito.every((element) => row.includes(element));
            if (isEqual) {
                count++
            } 
        });
        return count/length(this.allExam)
    }
}