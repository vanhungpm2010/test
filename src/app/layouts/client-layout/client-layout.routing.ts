import { Routes } from '@angular/router';

import { MenuComponent } from '../../pages/client/menu/menu.component';
import { BlogComponent } from '../../pages/client/blogs/blog.component';
import { HomeComponent } from '../../pages/client/home/home.component';

export const ClientLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'blog', component: BlogComponent },
];
