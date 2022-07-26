import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentFulService } from './../Services/content-ful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  progress:any = 20;
  constructor(private route: ActivatedRoute, private ContentFulService: ContentFulService) { }

  blogpost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.blogpost$ = this.ContentFulService.getEntriesById(id);


      }
    )


  }
}