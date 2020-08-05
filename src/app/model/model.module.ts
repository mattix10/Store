import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { DataSource } from './datasource';

@NgModule({
  providers: [ProductRepository, DataSource]
})

export class ModelModule {}
