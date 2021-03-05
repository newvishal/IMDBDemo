import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [PagenotfoundComponent]
})
export class SharedModule { }
