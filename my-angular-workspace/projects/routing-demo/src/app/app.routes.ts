import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'blogs',loadChildren:()=>import('../app/blogs-info/blogs-info-routing.module').then((m)=>m.BlogsInfoRoutingModule)},
    // {path:'/',component:HomeComponent},
    {path:'',redirectTo:'login',pathMatch:'full'}  ,
    {path:'**',component:NotFoundComponent}
];
