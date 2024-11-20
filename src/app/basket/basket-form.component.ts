import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basket-form.component.html',
  styleUrl: './basket-form.component.scss',
})
export class BasketFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    creditCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}-\d{3}$/)]),
  });

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
