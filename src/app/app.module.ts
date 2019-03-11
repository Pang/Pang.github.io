import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { LinksbarComponent } from './linksbar/linksbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    LinksbarComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'prefix', component: HomeComponent },
      { path: 'about', pathMatch: 'full', component: AboutComponent },
      { path: 'projects', pathMatch: 'full', component: ProjectsComponent },
      { path: '**', component: ErrorPageComponent },
    ], { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
