const todos = [
    {
        id : 1,
        text : 'javascript',
        done : true
   },
   {
       id : 2,
       text : 'function',
       done : true
   },
   {
       id : 3,
       text : '객체와 배열',
       done : true
   },
   {
       id : 4,
       text : '배열과 내장함수',
       done : false
   }
];

//const index = todos.findIndex(todo => todo.id===3);
//console.log(index);

//const index = todos.find(todo => todo.id===3);
//console.log(index);

const tasksNotDone = todos.filter(todo => todo.done === true);
console.log(tasksNotDone);