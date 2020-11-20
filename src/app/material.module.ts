import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatGridListModule, MatListModule, MatRippleModule,
             MatCardModule, MatBadgeModule, MatIconModule, MatFormFieldModule, MatInputModule,
             MatSelectModule, MatSidenavModule, MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule,
             MatProgressSpinnerModule],
  declarations: [
  ],
  exports: [ MatButtonModule, MatGridListModule, MatListModule, MatRippleModule, MatCardModule,
             MatBadgeModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule,
             MatSidenavModule, MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule, 
             MatProgressSpinnerModule]
})

export class MaterialModule { }