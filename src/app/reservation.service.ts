import { Injectable } from '@angular/core';
import { Reservation } from '../app/reservation.interface';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
    console.log('Reservation added:', reservation);
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }
}
