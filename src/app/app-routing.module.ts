import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/about/detail/detail.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    children: [
      {
        path: 'detail',
        component: DetailComponent,
        title: 'More About Us',
      },
    ],
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
