import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (e): void => {
    const nav = document.querySelector("nav");

    if (e.srcElement.scrollingElement.scrollTop > 100) {
      nav.classList.add("sticky");
    }
    else {
      nav.classList.remove("sticky");
    }
  };

  faSearch = faSearch;

  search(event) {
    this.router.navigate(["/search"], { queryParams: { filter: event.target.value } });
  }
}
