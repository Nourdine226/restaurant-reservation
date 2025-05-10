import { Component } from '@angular/core';
import { Reservation } from './reservation.interface';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReservationFormComponent, ConfirmationComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  confirmedReservation: Reservation | null = null;

  onReservationCreated(reservation: Reservation) {
    this.confirmedReservation = reservation;
  }
}