import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient) { }

  retrieveAllData(username: any){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
    //console.log("Execute Hello World Service")
  }

  deleteTodo(username:string, id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username:string, id: number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id: number, todo: Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }
}
