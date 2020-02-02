import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeletonLoaderComponent } from './seleton-loader.component';



@NgModule({
  declarations: [SeletonLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SeletonLoaderComponent]
})
export class SeletonLoaderModule { }
