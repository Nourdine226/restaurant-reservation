import { Component, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../reservation.interface';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit, OnChanges {
  @Output() reservationCreated = new EventEmitter<Reservation>();

  name: string = '';
  email: string = '';
  phone: string = '';
  date: string = '';
  time: string = '';
  guests: number = 1;
  specialRequests: string = '';

  ngOnInit() {
    console.log("ReservationFormComponent initialized.");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Form changes detected:", changes);
  }

  submitReservation() {
    const reservation: Reservation = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: new Date(this.date),
      time: this.time,
      guests: this.guests,
      specialRequests: this.specialRequests || undefined
    };
    this.reservationCreated.emit(reservation);
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = '';
    this.time = '';
    this.guests = 1;
    this.specialRequests = '';
  }
}
