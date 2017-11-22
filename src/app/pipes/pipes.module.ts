import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContianersPipe } from './contianers.pipe';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [ContianersPipe],
  exports: [ContianersPipe]
})
export class PipesModule { }