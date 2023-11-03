import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TitleStrategy } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TemplatePageTitleStrategy } from './extension/title.strategy';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    AppointmentComponent,
    ContactComponent,
    AboutComponent,
    TestimonialsComponent,
    ProviderComponent,
    ProvidersComponent,
    ButtonComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
