import { Routes } from '@angular/router';

import { MenuComponent } from '../../pages/client/menu/menu.component';
import { BlogComponent } from '../../pages/client/blogs/blog.component';
import { HomeComponent } from '../../pages/client/home/home.component';
import { CartComponent } from '../../pages/client/cart/cart.component';
import { ProductComponent } from '../../pages/client/product/product.component';

export const ClientLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'blog', component: BlogComponent },
    // { path: 'cart', component: CartComponent },
    // { path: 'product', component: ProductComponent },
];
