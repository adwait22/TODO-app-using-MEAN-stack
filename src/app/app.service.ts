import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {

  constructor(private _http: Http) { }

  getTodo() {
    return this._http.get('/todos').map(response => response.json());
  }
  saveTodo(todo: any) {

           return this._http.post('/insert', todo, JSON.stringify(todo))
           .map(res => res.json());

  }
  deleteTodo(id) {

    return this._http.delete('/todo/' + id)
      .map(res => res.json());

  }
}
