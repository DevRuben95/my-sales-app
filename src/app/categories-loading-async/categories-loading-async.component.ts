import { Component,OnInit } from '@angular/core';
import { Observable, lastValueFrom} from 'rxjs';
import { Category } from '../categories/category.dto';
import { CategoryService } from '../categories/category.service';
import { NgIf } from '@angular/common';
import { Pipe, PipeTransform} from '@angular/core';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-categories-loading-async',
  standalone: true,
  imports: [NgIf,AsyncPipe],
  templateUrl: './categories-loading-async.component.html',
  styleUrl: './categories-loading-async.component.css'
})
export class CategoriesLoadingAsyncComponent implements OnInit {
  
  categoriesObservables!:Observable<Category[]>;

  constructor(private categoryService : CategoryService) {}

  categories: Category[] = [];

  async ngOnInit() {
      this.categoriesObservables = this.categoryService.getAll(); // get the first page of categories with a size of 10 elements
      this.categories = await lastValueFrom(this.categoriesObservables);
  }
    

}
