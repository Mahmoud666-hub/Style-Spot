import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SingepageComponent } from './singepage/singepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  {path:'', redirectTo:'about', pathMatch: 'full'},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"contact", component:ContactComponent},
  {path:"cart", component:CartComponent},
  {path:"about", component:AboutComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"products", component:ProductsComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"singepage", component:SingepageComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
