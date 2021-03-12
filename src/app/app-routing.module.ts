import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ ProductComponent } from './product/product.component';
import{ ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'product',canActivate:[AuthGuard],component:ProductComponent },
  {path:'details',canActivate:[AuthGuard],component:ProductDetailComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
