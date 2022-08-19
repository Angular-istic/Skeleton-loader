import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader.component';



@NgModule({
  declarations: [
    SkeletonLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkeletonLoaderComponent
  ]
})
export class SkeletonLoaderModule { }
