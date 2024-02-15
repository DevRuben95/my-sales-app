import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import {DashboardComponent} from "./dashboard/dashboard.component"
import { CategoriesLoadingAsyncComponent } from './categories-loading-async/categories-loading-async.component';
export const routes: Routes = [

    { 
    path: './', 
    component: HomeComponent 
    },

    {
     path:"categories",
    component: CategoriesComponent
    },
    {
       path: 'categories-async',
       component:CategoriesLoadingAsyncComponent
    },

    {
      path:"dashboard",
      component:DashboardComponent
    }
];
