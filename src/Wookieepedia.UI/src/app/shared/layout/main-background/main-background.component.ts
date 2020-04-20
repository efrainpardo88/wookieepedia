import { Component, OnInit, HostListener } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-main-background',
  templateUrl: './main-background.component.html',
  host: { class: "main-background" },
  styleUrls: ['./main-background.component.scss']
})
export class MainBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.parallaxIt(e, ".stars-1", -30);
    this.parallaxIt(e, ".stars-2", -30);
    this.parallaxIt(e, ".death-star", -80);
    this.parallaxIt(e, ".caza-1", -200);
    this.parallaxIt(e, ".caza-2", -100);
    this.parallaxIt(e, ".caza-3", -40);
    this.parallaxIt(e, ".x-wing-1", -280);
    this.parallaxIt(e, ".x-wing-2", -90);
    this.parallaxIt(e, ".falcon", 200);
    this.parallaxIt(e, ".tie", 50);
  }

  parallaxIt(e, target, movement) {
    const container = document.querySelector('.main-background');
    const relx = e.pageX - container.clientLeft;
    const rely = e.pageY - container.clientTop;

    TweenMax.to(target, 1, {
      x: (relx - container.clientWidth / 2) / container.clientWidth * movement,
      y: (rely - container.clientHeight / 2) / container.clientHeight * movement
    });
  }
}
