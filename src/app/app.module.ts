import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WhyUsComponent } from './pages/whyUs/whyus.component';
import { TitleStrategy } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TemplatePageTitleStrategy } from './extension/title.strategy';
import { AboutComponent } from './pages/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import { TruncateDirective } from './directives/truncate.directive';
import { DetailComponent } from './pages/about/detail/detail.component';

register();
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
    WhyUsComponent,
    ButtonComponent,
    AlertComponent,
    TestimonialsComponent,
    SwiperDirective,
    TruncateDirective,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
