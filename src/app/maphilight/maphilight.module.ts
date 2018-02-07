//   import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaphilightComponent } from './maphilight.component';
export { MaphilightComponent } from './maphilight.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaphilightComponent],
  exports:      [MaphilightComponent]
})
export class MaphilightModule { }
