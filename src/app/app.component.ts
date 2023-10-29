import { Component, inject } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './interfaces/todos.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos?: Todo[];
  private todosSubscription: Subscription;
  private todosService = inject(TodosService)

  constructor(){
    this.todosSubscription = this.todosService.getTodos().subscribe(todos=> this.todos = todos);
  }
  
  ngDestroy(){
    this.todosSubscription.unsubscribe();
  }

  
}
