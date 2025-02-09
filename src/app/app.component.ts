import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CatigouriesComponent } from './catigouries/catigouries.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HomeComponent,
    CatigouriesComponent,
    MealDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'meal';
  ngOnInit(): void {
    initFlowbite();
  }
}
