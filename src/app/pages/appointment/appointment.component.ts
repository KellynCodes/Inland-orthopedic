import { CommonModule } from '@angular/common';
import { Doctors, Physicians } from '../../data/providers/providers';
import { HttpStatusCode } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'sobol-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AlertComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  public appointmentForm!: FormGroup;
  public isSending = signal<boolean>(false);
  public errorMessage = signal<string | null>(null);
  public successMessage = signal<string | null>(null);
  public _providers = [...Doctors, ...Physicians];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      department: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.appointmentForm.valid) {
      this.errorMessage.set('Please fill all the fields');
      this.setMessageState(5000);
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailjs.send(
        'service_emnblen',
        'template_3bamjmo',
        {
          to_name: 'there',
          ...this.appointmentForm.value,
        },
        'IANMnCbipO_NGY3LK'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.errorMessage.set(
          'Something unexpected happened while sending the message.Please try again.'
        );
        this.setMessageState(5000);
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.successMessage.set('We have received your message.');
        this.setMessageState(5000);
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.errorMessage.set('Appointment not sent. Try again.');
        this.setMessageState(5000);
        return;
      }
    }
  }

  setMessageState(ms: number): void {
    setTimeout(() => {
      this.errorMessage.set(null);
      this.successMessage.set(null);
    }, ms);
    return;
  }
}
