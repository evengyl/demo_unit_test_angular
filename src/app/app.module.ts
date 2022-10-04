import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightswitchComponent } from './1_lightswitch/lightswitch.component';
import { ParentComponent } from './2_IO/parent/parent.component';
import { ChildComponent } from './2_IO/child/child.component';
import { UserComponent } from './3_deps/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LightswitchComponent,
    ParentComponent,
    ChildComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
