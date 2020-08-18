import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatGridListModule, MatListModule, MatRippleModule,
             MatCardModule, MatBadgeModule, MatIconModule],
  declarations: [
  ],
  exports: [ MatButtonModule, MatGridListModule, MatListModule, MatRippleModule, MatCardModule,
             MatBadgeModule, MatIconModule]
})

export class MaterialModule { }