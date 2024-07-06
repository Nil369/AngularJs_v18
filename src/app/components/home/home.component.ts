import { Router } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) {

  }

  ngAfterViewInit() {
    // Animate the image from left to right with opacity 0 to 1
    gsap.fromTo('#hero-image', 
      {
        x: -200,
        opacity: 0,
        borderRadius: '0%',
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        borderRadius: '50%',
        ease: 'power3.out'
      }
    );

    // Stagger the text animation
    gsap.from('#hero-text', {
      duration: 1,
      delay: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('#hero-description', {
      duration: 1,
      delay: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });

    // Animate the button gradient color
    gsap.from('#explore-button', {
      backgroundPosition: '200% center',
      duration: 1.5,
      delay: 1,
      y: 50,
      opacity: 0,
      ease: 'linear',
      
    });
  }

  naviagteToAttribute() {
    this.router.navigateByUrl("data-binding")
  }

}
