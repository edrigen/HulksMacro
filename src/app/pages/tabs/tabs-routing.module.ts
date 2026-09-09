import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'catalog',
        loadChildren: () =>
          import('../catalog/catalog.module')
            .then(m => m.CatalogPageModule)
      },

      {
        path: 'home',
        loadChildren: () =>
          import('../../home/home.module')
            .then(m => m.HomePageModule)
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module')
            .then(m => m.ProfilePageModule)
      },

      // ADD THIS
      {
        path: 'product-page/:productId',
        loadChildren: () =>
          import('../product-page/product-page.module')
            .then(m => m.ProductPagePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}