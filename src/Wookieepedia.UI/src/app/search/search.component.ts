import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardsService } from 'src/app/services/cards.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ResourcesService } from '../services/resources.service';
import { Resource } from '../models/resource';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  resources: Resource[];
  searched = false;
  filter: string;
  dropdownCategories = [];
  selectedCategories = [];
  dropdownYears = [];
  selectedYears = [];
  dropdownSettings: IDropdownSettings;
  faSearch = faSearch;
  loading = false;

  constructor(
    private titleService: Title,
    private service: ResourcesService,
    private cards: CardsService
  ) {

    this.dropdownCategories = [
      { id: "films", name: "MOVIES" },
      { id: "people", name: "CHARACTERS" },
      { id: "planets", name: "PLANETS" },
      { id: "species", name: "SPECIES" },
      { id: "starships", name: "STARSHIPS" },
      { id: "vehicles", name: "VEHICLES" }
    ];

    for (let i = 1977; i <= new Date().getFullYear(); i++) {
      this.dropdownYears.push({ id: i.toString(), name: i.toString() });
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'none',
      itemsShowLimit: 4
    };

    this.resources = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle('Search | Wookieepedia');
  }

  onSearch() {
    this.resources = [];
    if (this.filter) {
      this.loading = true;
      if (this.selectedCategories.length > 0) {
        this.selectedCategories.forEach(i => {
          this.service.getFilteredResource(this.filter, i.id).subscribe(data => {
            this.setResource(data, i);
          })
        })
      }
      else {
        this.loading = true;
        this.dropdownCategories.forEach(i => {
          this.service.getFilteredResource(this.filter, i.id).subscribe(data => {
            this.setResource(data, i);
          })
        })
      }
    }
    else {
      this.loading = true;
      if (this.selectedCategories.length > 0) {
        this.selectedCategories.forEach(i => {
          this.service.getFullResource(i.id).subscribe(data => {
            this.setResource(data, i);
          })
        })
      }
    }
  }

  setResource(resource: Resource, info) {
    resource.results = this.cards.getResourceAsCard(resource.results);
    resource.resourceType = info.name;
    resource.page = resource.next ? (parseInt(resource.next.split("&")[0].slice(-1)) - 1).toString() : "";
    this.resources.push(resource);

    if (!this.searched)
      this.searched = true;

    document.querySelector("#results").scrollIntoView();

    this.loading = false;
  }
}
