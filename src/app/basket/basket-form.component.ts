import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basket-form.component.html',
  styleUrl: './basket-form.component.scss',
})
export class BasketFormComponent {
  form = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    creditCard: new FormControl(''),
  });

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
