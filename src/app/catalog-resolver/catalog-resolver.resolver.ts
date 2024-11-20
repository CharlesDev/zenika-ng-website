import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../product/product.types';
import { ApiService } from '../shared/services/api.service';

export const catalogResolver: ResolveFn<Product[]> = () => {
  const apiService = inject(ApiService);

  return apiService.getProducts();
};
