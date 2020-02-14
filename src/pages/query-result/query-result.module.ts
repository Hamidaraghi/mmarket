import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryResult } from './query-result';

@NgModule({
  declarations: [
    QueryResult,
  ],
  imports: [
    IonicPageModule.forChild(QueryResult),
  ],
})
export class QueryResultPageModule {}
