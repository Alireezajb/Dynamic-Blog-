import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentFulService } from '../Services/content-ful.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contentFull: ContentFulService) { }


  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPost$ = this.contentFull.getAllEntries();
   

  }
   itemsfiled: number = 0

  items(): any {
    if (this.itemsfiled == 0)
    {

      return this.itemsfiled;

    }
    else
    {
      this.itemsfiled++;

      return this.itemsfiled;

    }
     
    
  }

}
