import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientLayoutRoutes } from './client-layout.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MenuComponent } from '../../pages/client/menu/menu.component';
import { BlogComponent } from '../../pages/client/blogs/blog.component';
import { HomeComponent } from '../../pages/client/home/home.component';
import { ClientLayoutComponent } from './client-layout.component';
import { CartComponent } from '../../pages/client/cart/cart.component';
import { ProductComponent } from '../../pages/client/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    MenuComponent,
    BlogComponent,
    HomeComponent,
    CartComponent,
    ProductComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})

export class ClientLayoutModule {}
