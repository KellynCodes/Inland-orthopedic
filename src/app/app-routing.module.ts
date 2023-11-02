import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ProviderComponent } from './components/provider/provider.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      {
        path: 'provider/:name',
        component: ProviderComponent,
      },

      {
        path: 'physician/:name',
        component: ProviderComponent,
      },
    ],
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },

  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
    title: 'Appointment',
  },
  {
    path: 'page-not-found',
    component: NotfoundComponent,
    title: 'Page not found',
  },

  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
