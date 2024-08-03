import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component:NavbarComponent},
    { path: 'signUp', component:RegisterComponent },
    { path: 'signIn', component:LoginComponent },
    { path: '**', component:NotfoundComponent },

];
