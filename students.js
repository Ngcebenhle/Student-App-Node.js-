const  chalk  = require('chalk');
const fs = require('fs');



const getStudent = function() {
    const students = loadStudent();
    students.forEach(student => {
        console.log('Name:' + student.name + 'Age:' + student.age + 'class:' + student.class)
    });
}

const addStudent = function(name,age,clas) {
    const students = loadStudent();
    const duplicatedata = students.filter(function(){
       return ;
    })
  
   if(duplicatedata.length === 0){
    students.push(
        {
            name:name,
            age:age,
            class:clas
           }
       )
       saveStudent(students)
   }
  }

  const loadStudent = function() {
   try{
    const dataBuffer = fs.readFileSync('student.json');
    const JSONdata = JSON.parse(dataBuffer.toString())
    return JSONdata;
   }
   catch(e){
     return []
   }
  }

  const saveStudent = function() {
    const stringdata = JSON.stringify(students);
    fs.writeFileSync('student.json', stringdata)
  }

  const removeStudent = function(name) {
    console.log('Removing' + name)
    const stu = loadStudent();
    const newStu = stu.filter(function(stu){
        return stu.name !== name
    })

    saveStudent(newStu)

    if(stu.length > newStu.length){
        console.log(chalk.green('Removed' + name))
    }
    else{
        console.log(chalk.red('No student Found with Name:' + name))
    }
  }

  const readStudent = function(name) {
    const students = loadStudent();
    const foundStudent = saveStudent.find(student => students.name === name);
    if(foundStudent){
        console.log(chalk.green('Student Found'))
     console.log('Name:' + foundStudent.name + 'Age:' + foundStudent.age + 'class:' + foundStudent.class)
    }
    else{
        console.log(chalk.red('No Student Found'))
    }
  }




module.exports = {
    getStudent,
    addStudent, 
    removeStudent,
    getStudent,
    readStudent
};

