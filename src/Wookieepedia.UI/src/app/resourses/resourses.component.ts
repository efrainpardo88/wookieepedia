import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resourses',
  templateUrl: './resourses.component.html',
  styleUrls: ['./resourses.component.css']
})
export class ResoursesComponent implements OnInit {

  @Input() title: string;

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) {
      
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.titleService.setTitle(data.title + ' | Wookieepedia');
    });
  }
}
