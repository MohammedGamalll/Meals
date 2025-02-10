import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'meal/:id',
    loadComponent: () =>
      import('./meal-details/meal-details.component').then(
        (e) => e.MealDetailsComponent
      ),
  },
  // {
  //   path: '**',
  //   component:nout
  // },
];
