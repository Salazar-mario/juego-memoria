import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'game', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
