class Student {
    constructor( imie, wiek, oceny = [] ) {
        this.StudentName = imie
        this.StudentAge = wiek
        this.StudentGrades = oceny
        
    }

    addGrade(grade) {

        if(grade > 6 || grade < 1) {
            console.log("Podana ocena jest nieprawidłowa")
        } 

        else {
            this.StudentGrades.push(grade)
        }
    }

    getAverage() {
        this.average = 0
        for(var i = 0; i != this.StudentGrades.length; i++) {
            this.average += this.StudentGrades[i]
        }
        return ( this.average / this.StudentGrades.length )
    }

}

function desrukturyzacja(obj) {
    return {...rest} = obj
}

const studentList = []

function addStudent(name, age) {
    studentList.push( new Student(name, age) )
    console.log("Student added! Current list of students:")
    console.log( studentList )
}

