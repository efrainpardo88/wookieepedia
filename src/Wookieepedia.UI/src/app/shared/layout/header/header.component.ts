import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (e): void => {
    const header = document.querySelector("header");

    if (e.srcElement.scrollingElement.scrollTop > 100) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  };

  faSearch = faSearch;
}
