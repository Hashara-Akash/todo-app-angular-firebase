import { Component, OnInit } from '@angular/core';
import {ToDoService} from "../shared/to-do.service";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: any[] = [];
  constructor(private todoService : ToDoService) { }

  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges()
      .subscribe(item=>{
        this.todos = item;

      })
  }

  onClick(titleInput:HTMLInputElement){
    if(titleInput.value)
    this.todoService.addTodo(titleInput.value);
    titleInput.value = "";
  }
}
