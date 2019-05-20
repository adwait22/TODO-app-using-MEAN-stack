import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Headers } from '@angular/http';
import {Todo} from '../todo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {
  newTodo: any;
  req: any;
todos: [Todo];
  constructor(private _AppService: AppService) {

   }

  ngOnInit() {
    this.req = this._AppService.getTodo().subscribe(data => {
      this.todos = data as [Todo];
      // console.log(this.todos);
    });
  }
  addTodo(event, todoText) {
var result;
var newTodo = {
              text: todoText.value,
              isCompleted: false,
};
result = this._AppService.saveTodo(newTodo).subscribe(x => {
   this.todos.push(newTodo);
   todoText.value = ' ';    // to empty the search bar after submiting
});
  }
deleteTodo(todo) {
  this._AppService.deleteTodo(todo._id).subscribe(data => {
    if (data.n === 1) {
         for ( var i = 0 ; i <  this.todos.length; i++) {
             if (this.todos[i]._id === todo._id) {
               this.todos.splice(i, 1);
             }
         }
    }
  })
}
 
}
