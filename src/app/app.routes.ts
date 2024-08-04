import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'signUp', component:RegisterComponent },
    { path: 'signIn', component:LoginComponent },
    { path: 'singleProduct/:id', component:SingleProductComponent },
    { path: '**', component:NotfoundComponent },

]
