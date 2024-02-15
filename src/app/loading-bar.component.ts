import { CommonModule } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [MatProgressSpinnerModule,CommonModule],
  template: `
    <div *ngIf="visible" style="display: flex; justify-content: center; align-items: center; background: white;">
     <mat-progress-spinner color="primary" mode="indeterminate"></mat-progress-spinner>
         
   </div>
  `,
  styles: ``
})
export class LoadingBarComponent  implements OnInit {

  @Input() visible:Boolean= true;

  constructor() {}
    ngOnInit(): void {
        // Empty
    }

}
