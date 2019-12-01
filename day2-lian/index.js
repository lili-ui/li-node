#! /usr/bin/env node

// console.log('hello')

const program=require('commander')
const inquirer=require('inquirer')
const fs =require('fs')
let userlist=require('./userlist.json')

//只传入版本信息  默认值是-V
// program
//     .version('1.1.0')
//     .parse(process.argv)

//自定义
// program
//     .version('1.0.0','-v, --version')
//     .parse(process.argv)

//定义多个选项
// program
//     .version('1.1.0')
//     .option('-a,--add','add something')
//     .option('-u,--undate','undate something')
//     .option('-r,--remove','remove something')
//     .parse(process.argv)
// console.log('You choose:')

//     if(program.add)console.log('add something')
//     if(program.undate)console.log('undate something')
//     if(program.remove)console.log('remove something')

//多个单词形式

// program
//     .version('1.0.0')
//     .option('--add-file','add a file')
//     .parse(process.argv)
//     if(program.addFile) console.log('add a file')

//以--no开头的选项，代表后面几根单词的相反面
// program 
//     .version('1.0.0')
//     .option('--no-add','not add a file')
//     .parse(process.argv)
// if(program.add) console.log('add a file')
// else console.log('not add a file')

// 选项后面使用<>或[]

// program
//     .version('1.0.0')
//     .option('-a,--add <filename>','add a file')
//     .parse(process.argv)
// console.log('add a file named:'+program.add)

const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
},
{
    type: 'password',
    message: '设置一个密码:',
    name: 'password'
},
{
    type: 'input',
    message: '输入一个身份证号:',
    name: 'shen'
}
];
program
    .version('1.0.0')
    .command('my-cli')
    .description('It is my cli')
    .action(()=>{
        inquirer.prompt(promptList).then(answers => {
               
            if(userlist.findIndex(item=>item.shen===answers.shen)==-1){
                userlist.push(answers)
                fs.writeFileSync('./userlist.json',JSON.stringify(userlist),'utf8')
            }else{
               console.log('已经存在')
            }
           
        })
    })

program.parse(process.argv)