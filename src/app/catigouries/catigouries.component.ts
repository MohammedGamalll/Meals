import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { CatigouriesService } from '../catigouries.service';

@Component({
  selector: 'app-catigouries',
  imports: [],
  templateUrl: './catigouries.component.html',
  styleUrl: './catigouries.component.scss',
})
export class CatigouriesComponent {
  categories: any[] = [];
  private readonly _CatigouriesService = inject(CatigouriesService);
  constructor(private cat: ElementRef) {}
  element!: HTMLElement;
  selectedCategory!: string;

  ngOnInit() {
    this.selectedCategory = 'All'; 
    this._CatigouriesService.getCatigouries().subscribe({
      next: (data) => {
        this.categories = data.meals;
        // console.log(data.meals);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // console.log('done');
      },
    });
  }

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
    this.selectedCategory = category;
  }
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectCategory(selectedValue); // Update selected category
  }

}
