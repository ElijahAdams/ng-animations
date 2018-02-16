import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    {title: 'Master Angular Styling', isActiveGoal: true},
    {title: 'Understand Angular Animations', isActiveGoal: false},
  ];
  isFav = true;

  constructor(private renderer : Renderer2) {

  }

  showBoring(element: HTMLElement) {
   // element.style.display ='block';

    this.renderer.setStyle(element, 'display', 'block');
  }
}
