import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css'],
  host: { class: "social-network" }
})
export class SocialNetworkComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
}
