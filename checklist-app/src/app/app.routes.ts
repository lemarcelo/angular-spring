import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'category', component: CategoryComponent},
  {'path': '**', component: PageNotFoundComponent}
];
