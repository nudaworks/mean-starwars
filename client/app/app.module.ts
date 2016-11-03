// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
// import { Http, Headers, RequestOptions } from '@angular/http';

// component declarations
import { HomeComponent } from './home/home.component';
// import { PlanetsComponent } from './planets/planets.component';
// import { CharactersComponent } from './characters/characters.component';
// import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';

// pipes declarations
// import { FilterPipe } from './shared/pipes/filter.pipe';
// import { OrderByPipe } from './shared/pipes/order-by.pipe';
//
// // service desclarations
// import { PlanetsService } from './planets/planets.service';


//
// const routes:Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'planets', component: PlanetsComponent },
//   { path: 'characters', component: CharactersComponent },
// ];

// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    // routing
  ],
  declarations: [
    // PlanetsComponent,
    // CharactersComponent,
    HomeComponent,
    // NavComponent,
    // FilterPipe,
    // OrderByPipe,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // PlanetsService,
    // Http
  ]
})

export class AppModule {}
