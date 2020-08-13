import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatGridListModule, MatListModule, MatRippleModule],
  declarations: [
  ],
  exports: [MatButtonModule, MatGridListModule, MatListModule, MatRippleModule]
})

export class MaterialModule { }