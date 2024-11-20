import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasketService } from '../basket/basket.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product.types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ProductComponent, CurrencyPipe],
})
export class CatalogComponent {
  protected products: Product[] = [];

  private basketService = inject(BasketService);

  protected get isStockEmpty(): boolean {
    return this.products.every(({ stock }) => stock === 0);
  }

  protected basketTotal = this.basketService.total;

  constructor(@Inject('WELCOME_MSG') protected welcomeMsg: string) {
    this.basketService.fetch().subscribe();
  }

  protected addToBasket(product: Product): void {
    this.basketService.addItem(product.id).subscribe(() => {
      this.decreaseStock(product);
    });
  }

  private decreaseStock(product: Product): void {
    product.stock -= 1;
  }

  protected isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
