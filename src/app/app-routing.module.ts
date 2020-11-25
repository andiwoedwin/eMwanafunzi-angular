import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopAComponent } from './modules/shopping/component/shop-a/shop-a.component';
import { ShopBComponent } from './modules/shopping/component/shop-b/shop-b.component';
import { ShopCComponent } from './modules/shopping/component/shop-c/shop-c.component';
import { ShopDComponent } from './modules/shopping/component/shop-d/shop-d.component';
import { ShopEComponent } from './modules/shopping/component/shop-e/shop-e.component';
import { HomeComponent } from './modules/home/component/home/home.component';
import { ViewComponent } from './modules/component/view/view.component';
import { CartComponent } from './modules/component/cart/cart.component';
import { PaymentComponent } from './modules/component/payment/payment.component';
import { DeliveryComponent } from './modules/component/delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ShopFComponent } from '../app/shop-f/shop-f.component';
import { ShopGComponent } from '../app/shop-g/shop-g.component';






const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'shopA', component:ShopAComponent},
  { path: 'shopB', component:ShopBComponent},
  { path: 'shopC', component:ShopCComponent},
  { path: 'shopD', component:ShopDComponent},
  { path: 'shopE', component:ShopEComponent},
  { path: 'view', component:ViewComponent},
  { path: 'cart', component:CartComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'delivery', component:DeliveryComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  // { path: 'shop-f', component:ShopFComponent},
  { path: 'shop-g', component:ShopGComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
