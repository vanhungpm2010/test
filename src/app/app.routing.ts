import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: 'admin',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  // {
  //   path: 'admin',
  //   redirectTo: 'admin/dashboard'
  // },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
    {
        path: '',
        loadChildren: './layouts/client-layout/client-layout.module#ClientLayoutModule'
    }]
  }
]
