import { Router } from '@angular/router';
import { CatigouriesComponent } from '../catigouries/catigouries.component';
import { IMeal } from './../imeals';
import { MealsService } from './../meals.service';
import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [CatigouriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly _MealsService = inject(MealsService);
  loading: boolean = true;
  allMeals!: IMeal[];
  selectedMeals!: IMeal[];
  selectedCategory: string = 'All';
  constructor(private router: Router) {}

  ngOnInit() {
    this._MealsService.getMeals().subscribe({
      next: (data) => {
        this.allMeals = data.meals;
        // console.log(data.meals);
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
      },
    });
  }
  onCategorySelected(category: string) {
    this.selectedCategory = category;

    if (this.selectedCategory !== 'All') {
      this._MealsService.getMealsByCategory(category).subscribe({
        next: (data) => {
          this.selectedMeals = data.meals;
          // console.log(data.meals);
          // console.log(this.selectedMeals);

        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          // console.log('done');
        },
      });
    } else if (
      this.selectedCategory === 'All' ||
      this.selectedCategory === ''
    ) {
      this._MealsService.getMeals().subscribe({
        next: (data) => {
          this.allMeals = data.meals;
          this.loading = false;
          // console.log(this.allMeals);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          // console.log('done');
        },
      });
    }
  }

  viewRecipe(mealId: string) {
    this.router.navigate(['/meal', mealId]);
  }
}
