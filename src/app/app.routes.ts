import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'meal/:id', component: MealDetailsComponent },
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
