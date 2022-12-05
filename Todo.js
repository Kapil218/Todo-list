new Vue({
el:'#vue',

data:{
        name:"",
        todos:[],
        input_content:null,
        taskStatus:'remaining',
    },

methods: {
       addItem:function(){
       
        event.preventDefault();
        
        if(this.input_content==null || this.input_content=='')  return  ;
       
        this.todos.push(  {task    :   this.input_content ,
                         Created_on:   new Date().toISOString().replace('T', ' ').split(".")[0] ,
                         fulfilled :   false,
                         taskStatus:'remaining'
                          }       
                       ) ;
        this.input_content='';
       } ,
       

       deleteTask:function(index){
        console.log(index);
        this.todos.splice(index,1);
       },


       taskCompleted:function(index){
        this.todos[index].fulfilled=!this.todos[index].fulfilled;
        if(this.todos[index].taskStatus==='remaining'){
            this.todos[index].taskStatus='fulfield';
        }
        else{
            this.todos[index].taskStatus='remaining';
        }
       }
    },
  
})

