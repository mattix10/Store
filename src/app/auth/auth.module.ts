import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AuthComponent } from './auth.component';



@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [ AuthComponent],
})
export class AuthModule {}