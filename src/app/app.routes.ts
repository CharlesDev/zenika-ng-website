import { Routes } from '@angular/router';
import { catalogResolver } from './catalog-resolver/catalog-resolver.resolver';
import { CatalogComponent } from './catalog/catalog.component';
import { PRODUCT_DETAILS_PARAM_KEY } from './product-details/product-details.config';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    resolve: {
      catalog: catalogResolver,
    },
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket/basket.component'),
  },
  {
    path: `products/:${PRODUCT_DETAILS_PARAM_KEY}`,
    loadComponent: () => import('./product-details/product-details.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found-component/not-found-component.component'),
  },
];
