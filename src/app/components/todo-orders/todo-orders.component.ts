import { Component, inject } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';
import { Orders } from 'src/app/interfaces/todos.interfaces';
import { orderOptions } from 'src/app/config/options';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.css']
})
export class TodoOrdersComponent {
  private todosService = inject(TodosService);

  public selectedOrder: {value: Orders,name: string} = orderOptions[0];
  public orderOptions = orderOptions;

  public orderByDate(selectedOrder: {value: Orders,name: string}){
    this.selectedOrder= selectedOrder;
    this.todosService.orderByDate(selectedOrder.value)
  }
  

}
