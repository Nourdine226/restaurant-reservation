// src/app/app.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Reservation } from './reservation.interface';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReservationFormComponent, ConfirmationComponent, CommonModule, NgIf, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  confirmedReservation: Reservation | null = null;

  @ViewChild(ReservationFormComponent) reservationFormComponent!: ReservationFormComponent;
  @ViewChild(ConfirmationComponent) confirmationComponent!: ConfirmationComponent;

  constructor(private reservationService: ReservationService) {}

  ngAfterViewInit() {
    console.log("ReservationFormComponent is ready:", this.reservationFormComponent);
  }

  onReservationCreated(reservation: Reservation) {
    this.confirmedReservation = reservation;
    this.reservationService.addReservation(reservation);
  }
}
