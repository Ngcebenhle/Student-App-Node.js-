// const fs = require('fs')

// fs.writeFileSync('student.txt','student test')
// fs.appendFileSync('student.txt','student test 2!!!!')

// const chalk = require('chalk')

const { argv } = require('yargs');
const StudentFiles = require('./students')
const yargs = require('yargs/yargs')

// const command = process.argv[2];
// if(command == 'add'){
//     console.log('Adding a student')
// }
// else if(command == 'remove'){
//     console.log('Removing a student')
// }

console.log(process.argv)
console.log(yargs.argv)


// adding students
yargs.command({
      command:'add',
      description: 'adding a student',
    builder:{
        name:{
            describe: 'Takes in Students Full Name',
            demandOption:true,
            type:String,
        },
        age:{
            describe: 'Takes in Students Age',
            demandOption:true,
            type:Number,
        },
        class:{
            describe: 'Takes in Students Class',
            demandOption:true,
            type:String,
        },
    },
      handler: function(){
        // console.log('adding a student ' + argv.name + 'Age' + argv.age + 'class' + argv.class)
        StudentFiles.addStudent(argv.name,argv.age,argv.class)
      }
});

//Removing a student 
yargs.command({ 
    command:'remove',
    description: 'adding a student',
    builder:{
        name:{
            describe: 'Takes in Students Full Name',
            demandOption:true,
            type:String,
        },
        // age:{
        //     describe: 'Takes in Students Age',
        //     demandOption:true,
        //     type:Number,
        // },
        // class:{
        //     describe: 'Takes in Students Class',
        //     demandOption:true,
        //     type:String,
        // },
    },
    handler: function(){
      StudentFiles.removeStudent(argv.name)
    }
});

// Listing Students
yargs.command({
    command:'list',
    description: 'listing a student',
    handler: function(){
     StudentFiles.getStudent()
    }
});

// Reading Students

yargs.command({
    command:'read',
    description: 'reading a student',
    builder:{
        name:{
            describe: 'Takes in Students Full Name',
            demandOption:true,
            type:String,
        },
        // age:{
        //     describe: 'Takes in Students Age',
        //     demandOption:true,
        //     type:Number,
        // },
        // class:{
        //     describe: 'Takes in Students Class',
        //     demandOption:true,
        //     type:String,
        // },
    },
    handler: function(){
     StudentFiles.readStudent(argv.name)
    }
});