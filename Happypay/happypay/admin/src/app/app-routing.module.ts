import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Task/aio-table.module').then(m => m.AioTableModule)
      },
      {
        path: 'tasktransactions',
        loadChildren: () => import('./Task Transactions/aio-table.module').then(m => m.AioTableModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./Users/aio-table.module').then(m => m.AioTableModule)
      },
      {
        path: 'wallettransactions',
        loadChildren: () => import('./Wallet Transactions/aio-table.module').then(m => m.AioTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
