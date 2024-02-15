import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { MatCardModule } from '@angular/material/card'; 
import { Category } from './category.dto';
import { DataSource } from '@angular/cdk/collections';
import { CategoryService } from './category.service';
import { FormComponent } from './form/form.component';
import {NgClass, NgIf,NgFor} from "@angular/common"
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoadingBarComponent } from '../loading-bar.component';  
import { lastValueFrom } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule } from '@angular/flex-layout'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: `
    .full-width-table {
      width: 100%;
    }
    
  `,
  standalone: true,
  imports: [FlexLayoutModule,NgIf,NgFor,NgClass,MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,FormComponent,MatButtonModule,MatIconModule,LoadingBarComponent,MatListModule]
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;

  dataSource!: MatTableDataSource<Category>;
  // dataSource = new CategoriesDataSource();
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','description',"actions"];

  
  //ShowFORM
  showForm: Boolean = false;
  category!: Category;

  showLoading: boolean=false;

  onNewCategoryClick()
   {
    
    this.category = {
      id: 0,
      name: '',
      description: ''
      }
     this.showForm=true;
     
   }

  constructor(private CategoryService:CategoryService) { }

  ngAfterViewInit(): void {
    this.CategoryService.getAll().subscribe(
     categories => {
    this.dataSource = new MatTableDataSource(categories)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
     }
    )
  }

  onbackForm()
  {
    this.showForm=false;
    this.refreshData();
  
  }
  onSave(category:Category)
  {
    console.log("save on category.component.ts", category)
     this.showLoading= true;

    this.CategoryService.save(category).subscribe((categorySaved)=>{
      console.log("category saved:",categorySaved);
      this.showForm = false;
      this.refreshData();
      this.showLoading= false;
    });
  }
  
  onEditCategoryClick(category:Category)
  {
    console.log("edit categoria",category)
    this.category= category;
    this.showForm=true;

  
  }
  onDeleteCategoryClick (category:Category)
  {
     //console.log(" delete category", category);
     if(confirm(`Delete"${category.name}" with id ${category.id}?`)) {
      this.CategoryService.delete(category.id).subscribe(()=>
        this.refreshData()
      ) }
}

   
  async refreshData()
  { 
    
    this.showLoading =true;
   try{
    const categories: Category[] = await lastValueFrom(
      this.CategoryService.getAll()
    )

    // this.CategoryService.getAll().subscribe(
    //   categories => {
     this.dataSource = new MatTableDataSource(categories)
    //  this.table.dataSource = this.dataSource;
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    //  this.table.dataSource = this.dataSource;
  
    } catch(error){
      console.log("opsss!!", error);
    } finally {
     this.showLoading = false; 
    }
    
     
  }
 
}
