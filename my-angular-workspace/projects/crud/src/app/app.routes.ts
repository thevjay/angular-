import { Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {path:'insert',component:InsertComponent},
    {path:'edit/:id',component:UpdateComponent},
    {path:'delete/:id',component:DeleteComponent}
];
