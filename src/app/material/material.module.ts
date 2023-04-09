import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { A11yModule } from '@angular/cdk/a11y';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

const materials = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  A11yModule,
  MatButtonModule,
  MatGridListModule,
  DragDropModule,
];

@NgModule({
  declarations: [],
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
