export interface Reservation {
    id: number;
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    guests: number;
    specialRequests?: string;
  }