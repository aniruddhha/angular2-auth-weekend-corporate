import { GuardService } from './contact/guard.service';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router'

const APP_PATH : Routes = [
    {path : '', component: LoginComponent},
    {path : 'register', component: RegisterComponent},
    {path : 'contact', component : ContactComponent, canActivate : [GuardService]}
];

export const AppRouter = RouterModule.forRoot(APP_PATH);