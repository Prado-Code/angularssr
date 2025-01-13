import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';

export const routes: Routes = [
{path: "first", component: FirstComponent},
{path: "second", component: SecondComponent},
{path: "third/:id", component:ThirdComponent },
{path: "fourth", component:ForthComponent },

];
