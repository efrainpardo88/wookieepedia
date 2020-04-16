import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss']
})
export class ViewLayoutComponent implements OnInit {
  @Input() title: string;

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) {
      
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.titleService.setTitle(data.title + ' | Wookieepedia');
    });
  }
}
