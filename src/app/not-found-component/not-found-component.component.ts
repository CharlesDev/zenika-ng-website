import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  standalone: true,
  imports: [],
  templateUrl: './not-found-component.component.html',
  styleUrl: './not-found-component.component.scss',
})
export class NotFoundComponentComponent {
  router = inject(Router);

  goHome() {
    this.router.navigate(['']);
  }
}

export default NotFoundComponentComponent;
