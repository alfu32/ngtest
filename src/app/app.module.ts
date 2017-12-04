import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { XcardComponent } from './xcard/xcard.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

import { PeopleService } from "./people.service";
import { AppRoutingModule } from './/app-routing.module';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { SexPipe } from './sex.pipe';
import { StateNamePipe } from './state-name.pipe';
import { StatefulCanvasComponent } from './stateful-canvas/stateful-canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    XcardComponent,
    CardListComponent,
    CardDetailComponent,
    AppToolbarComponent,
    CollapsibleComponent,
    SexPipe,
    StateNamePipe,
    StatefulCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
