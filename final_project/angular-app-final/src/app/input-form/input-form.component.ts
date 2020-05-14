import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8000/fp/';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  public inputName: string;
  public likesChina = false;
  public likesUSA = false;

  public apiResponse: {name: string, likes_China: string, likes_USA: string};
  public apiError;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.apiResponse = null;
    this.apiError = null;

    this.http.post(API_URL, {
      name: this.inputName,
      likes_USA: this.likesUSA,
      likes_China: this.likesChina,
    }).subscribe(
      (result: {name: string, likes_China: string, likes_USA: string}) => {
        this.apiResponse = result;
      },
      error => {
        console.log(error);
        this.apiError = error;
      }
    );

  }

}
