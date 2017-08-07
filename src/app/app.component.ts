import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProcuraGifs';

  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  giphies = [];


  constructor(http: Http){
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void { 
    var apiLink = this.link + searchTerm.value;
    

    this.http.request(apiLink) 
      .subscribe((res: Response)=>{
        this.giphies = res.json().data;
          console.log(res.json().data);
         
      });
  }
}
