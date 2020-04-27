import { Component, OnInit } from '@angular/core';
import { faChevronDown, faImages } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  faChevronDown = faChevronDown;

  ngOnInit(): void {
    this.titleService.setTitle( 'Home | Wookieepedia');
  }
}

