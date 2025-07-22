import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Jr. Software Engineer (Trainee)',
      company: 'OORJAA (Yatnavat Technologies Pvt. Ltd.)',
      dates: 'Jan 2023 – Dec 2023',
      icon: 'bi bi-code-slash',
      bgColor: 'bg-gradient-exp1',
      delay: '0.2s',
      hover: false,
      bullets: [
        'Developed scalable, modular features for Transportation & Inventory Management Systems using Angular 10+ and lazy-loaded modules.',
        'Built reactive forms with dynamic validations, inline error messages, and robust form-level error handling across all modules.',
        'Integrated JWT-based authentication and authorization, including RBAC via Keycloak for protected routing and secure API access.',
        'Created PrimeNG-based responsive tables with pagination, search filters, and sorting; used pipes and directives for name/date formatting and dynamic DOM rendering.',
        'Implemented geolocation in DriverPIS using Mapbox and Google Maps within the TMS module.',
        'Worked with RxJS (BehaviorSubject, Observables) and NgRx Store to manage and share large-scale reactive state.',
        'Assigned inventory assets to new or existing users with secure data handling, and developed error-resilient workflows with full API integration.',
        'Handled large datasets using async/await, observables, and services with HTTP interceptors, and managed form-state with ngModel and two-way binding.',
        'Applied structural and attribute directives (*ngIf, ngFor, ng-container, ng-template) to manage conditional layouts and interactions.',
        'Designed and delivered responsive UIs for dashboards and mobile screens using SCSS, Bootstrap, and React Native for field apps.'
      ]
    }
  ];
}
