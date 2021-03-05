import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PagenotfoundComponent]
})
export class SharedModule { }
