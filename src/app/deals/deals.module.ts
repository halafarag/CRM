import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DealsComponent } from './components/deals/deals.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { IgxDragDropModule, IgxDialogModule } from 'igniteui-angular';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    DealsComponent,
    PipelineComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    IgxDragDropModule,
    IgxDialogModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    DealsComponent,
    PipelineComponent,
  ],
})
export class DealsModule {}
