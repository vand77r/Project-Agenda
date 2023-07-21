import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos : Todo[] =[]

  message : string =''
  // [
  //   new Todo(1, 'Dance', true, new Date()),
  //   new Todo(2, 'Angular', false, new Date()),
  //   new Todo(3, 'Python', false, new Date()),
  //   new Todo(4, 'Faang', false, new Date()),
  // ]

  constructor(
    private todoDataService: TodoDataService,
    private router : Router
  ){}
  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllData('Vandana').subscribe( 
      response => {
        console.log(response)
        this.todos = response;
      })
  }
  deleteTodo(id: number){
    console.log(`Delete Todo with Id: ${id}`)
    this.todoDataService.deleteTodo('Vandana', id).subscribe( 
      response => {
        console.log(response)
        this.message = `Deletion of todo ${id} successful!`
        this.todoDataService.retrieveAllData('Vandana').subscribe( 
          response => {
            console.log(response)
            this.todos = response;
            this.refreshTodos();
          })
      })
  }

  updateTodo(id: number){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }
  
  addTodo(){
    console.log(`add todo`);
    this.router.navigate(['todos',-1]);
  }
}
