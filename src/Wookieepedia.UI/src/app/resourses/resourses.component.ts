import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs';

@Component({
  selector: 'app-resourses',
  templateUrl: './resourses.component.html',
  styleUrls: ['./resourses.component.css']
})
export class ResoursesComponent implements OnInit {
  public titulo: string;
  public recurso: string;
  public valores: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private titleService: Title
    ) {}

  ngOnInit(): void {
    
    
    this.activatedRoute.queryParams.forEach(param => this.valores = param)      
    this.recurso = this.valores.recurso;
    //console.log(this.recurso)
    this.titleService.setTitle( 'Resources | Wookieepedia');
    
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 15); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}
}
