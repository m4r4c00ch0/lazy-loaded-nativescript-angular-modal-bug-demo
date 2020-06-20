import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@time/nativescript';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
