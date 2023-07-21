import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  id: number = 0; 
  todo : Todo = new Todo(this.id, '',false, new Date());

  constructor(
    private todoDataService : TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ){}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '',false, new Date());
    if (this.id != -1) {
      this.todoDataService.retrieveTodo('Vandana', this.id)
      .subscribe( data => this.todo = data)
    }
  }

  saveTodo():void {
    this.todoDataService.updateTodo('Vandana', this.id, this.todo).subscribe(
      data =>{ 
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }
}
