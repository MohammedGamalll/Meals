import { Component } from '@angular/core';
import { MealsService } from '../meals.service';
import { MealDetails } from '../meal-details';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
  imports: [],
})
export class MealDetailsComponent {
  mealDetails!: MealDetails;
  loading = true;
  mealNotFound = false;
  ingredientsAndMeasures: Array<{ ingredient: string; measure: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private _MealsService: MealsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadMealDetails(id);
      } else {
        this.mealNotFound = true;
        this.loading = false;
      }
    });
  }

  loadMealDetails(id: string) {
    this._MealsService.getMealById(id).subscribe({
      next: (data) => {
        if (data.meals && data.meals.length > 0) {
          this.mealDetails = data.meals[0];
          this.getIngredientsAndMeasures();
        } else {
          this.mealNotFound = true;
        }
        this.loading = false;
      },
      error: (error) => {
        this.mealNotFound = true;
        this.loading = false;
      },
    });
  }

  getIngredientsAndMeasures() {
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredient = this.mealDetails[ingredientKey as keyof MealDetails];
      const measure = this.mealDetails[measureKey as keyof MealDetails];
      if (ingredient && ingredient.trim() !== '') {
        this.ingredientsAndMeasures.push({
          ingredient: ingredient.trim(),
          measure: (measure || '').trim(),
        });
      }
    }
  }
}
