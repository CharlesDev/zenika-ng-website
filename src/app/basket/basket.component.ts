import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer.types';
import { BasketService } from './basket.service';

@Component({
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor],
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  protected customer: Customer = { name: '', address: '', creditCard: '' };

  private basketService = inject(BasketService);

  protected basketItems = this.basketService.items;
  protected numberOfItems = this.basketService.numberOfItems;
  protected basketTotal = this.basketService.total;

  constructor(private router: Router) {
    this.basketService.fetch().subscribe();
  }

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.basketService.checkout(this.customer).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

export default BasketComponent;
