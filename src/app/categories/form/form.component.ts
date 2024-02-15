import { Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormGroup,FormControl, Validators} from "@angular/forms"
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatError } from '@angular/material/form-field';
import {NgIf} from "@angular/common"
import {MatButtonModule} from '@angular/material/button';
import { Category } from '../category.dto';
import  {FormBuilder} from '@angular/forms';

 @Component({
  selector: 'category-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule,MatCardModule,FlexLayoutModule,NgIf,MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

   
 
// categoryForm = new FormGroup({
//  id: new FormControl(),
//   name: new FormControl('',[Validators.required,Validators.minLength(3)]),
//    description: new FormControl('',[Validators.required,Validators.minLength(10)])
//  });
   



 categoryForm = this.fb.group({
  id: [0],  
  name: ['',[Validators.required, Validators.minLength(3)]], 
  description:['']

 })
 constructor(private fb : FormBuilder) {}

   @Output() back = new EventEmitter();
   
   @Output() Save = new EventEmitter<Category>();
   
   @Input() loading: boolean= false;
   

  @Input()
   set category(category : Category){       
      this.categoryForm.setValue(category);  
     }

   onSubmit(){     
    console.log("submit on form.component.ts", this.categoryForm.value);
    this.Save.emit(this.categoryForm.value as Category);
   }

   onBack()
   {
      this.back.emit();
   
   }
}


// categoryForm = new FormGroup({
//   id: new FormControl(""),
//   name: new FormControl(''),
//   description: new FormControl('')
// })

// constructor() {}
//  ngOnInit():void {}