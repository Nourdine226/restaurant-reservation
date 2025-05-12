# RestaurantReservationApp

A simple restaurant reservation system built with Angular. This project allows customers to book tables and receive instant reservation confirmations.

## Features

- **Reservation form with validation**
- **Instant confirmation of reservations**
- **User friendly design**
- **Efficient Component Communication**  
- **Reusable Components with Content Projection**  
- **Basic Routing for Improved Navigation**  
- **Basic Forms for Input Handling and Validation**  

## Technologies Used
- **This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.**
- **TypeScript** (interface for reservations)
- **HTML & SCSS** (styling and structure)

##Concepts Utilized
- **Interface (TypeScript)**: `reservation.interface.ts`
- **Interpolation**: Data binding in the confirmation component.
- **Property Binding**: Passing reservation data between components.
- **Event Binding**: Handling form submissions.
- **Two-way Binding**: Syncing form inputs.
- **Structural Directives** (`*ngIf`, `*ngFor`): Conditional rendering.
- **Attribute Directives** (`ngClass`): Dynamic styling (potential for future improvements).
- **Pipes**: Date formatting in the confirmation component.
- **Parent-Child Communication** (`@Input()`, `@Output()`): Data exchange between components.
- **Component Lifecycle Hooks** (`ngOnInit`, `ngOnChanges`): Managing component behavior over time.  
- **ViewChild and ContentChild**: ccessing and manipulating child components.  
- **Content Projection (`<ng-content>`)**: Reusing content across multiple components.  
- **Basic Services**: Shared functionality across components.  
- **Basic Routes**: Simple navigation between components.  
- **Basic Forms**: Managing and validating user input.  


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Screenshots (interface) end explain

### Empty form
![Empty form](public/assets/images/formulaire%201.png)

The user can enter their personal information, the date, time of reservation, the number of guests and special requests, and then submit the form with a reserve button. Also, we notice a guest (1) by default in the guest box because the reservation is valid for at least one guest.

### Completed form
![Completed form](public/assets/images/formulaire%202.png)

Once the user has entered all the information the form looks like this, ready to be submitted.

### Confirmation
![Confirmation](public/assets/images/confirmation.png)

After the form is submitted, the user sees a confirmation message summarizing all the booking details, including the reservation date, time, number of guests, and any special requests. This final confirmation step ensures that the user is fully informed about their reservation and can review the details before their visit. any special requests.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
