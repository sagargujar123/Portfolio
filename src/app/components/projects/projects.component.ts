import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Transportation Management System (TMS)',
      subtitle: 'Angular • NgRx • PrimeNG • Mapbox • Keycloak • Java',
      icon: 'bi bi-truck',
      bgColor: 'bg-gradient-tms',
      repo: 'https://github.com/you/tms',
      hover: false,
      showAll: false,
      descriptionPoints: [
        'Built modular UI using lazy-loaded features and reusable components.',
        'Implemented JWT token auth and Keycloak RBAC for secure access.',
        'Used PrimeNG tables with pagination, search filters, pipes, and directives.',
        'Reactive forms with validations and dynamic error handling.',
        'Managed reactive state via RxJS, BehaviorSubject, and NgRx.'
      ]
    },
    {
      title: 'Inventory Management System (IMS)',
      subtitle: 'Angular • PrimeNG • RxJS • JWT • Spring Boot',
      icon: 'bi bi-box-seam',
      bgColor: 'bg-gradient-ims',
      repo: 'https://github.com/you/inventory',
      hover: false,
      showAll: false,
      descriptionPoints: [
        'CRUD for assets with JWT-based authentication and authorization.',
        'Reactive forms with field/group validations and inline error messages.',
        'PrimeNG tables with pagination and filtering for asset management.',
        'Asset assignment to users with API integration and observables.',
        'Responsive design, bug fixes, and HTTP request-response handling.'
      ]
    },
    {
      title: 'HiSaaB – Dashboard Analytics',
      subtitle: 'Angular • Chart.js • PrimeNG',
      icon: 'bi bi-graph-up-arrow',
      bgColor: 'bg-gradient-hisaab',
      repo: 'https://github.com/you/hisaab',
      hover: false,
      showAll: false,
      descriptionPoints: [
        'Responsive dashboard with real-time analytics using Chart.js.',
        'Agreement module with PrimeNG charts and data filters.',
        'Dynamic UI rendering using ng-container and ng-template.'
      ]
    },
    {
      title: 'TMS Driver App',
      subtitle: 'React Native • Java • JWT',
      icon: 'bi bi-phone',
      bgColor: 'bg-gradient-driver',
      repo: 'https://github.com/you/driver-app',
      hover: false,
      showAll: false,
      descriptionPoints: [
        'Designed UI screens and ReturnToDC functionality.',
        'Integrated APIs using async/await with JWT token auth.',
        'Ensured responsive and conditional mobile flow.'
      ]
    },
    {
      title: 'Login & User Auth Module',
      subtitle: 'Angular • JWT • AuthGuard • Bootstrap',
      icon: 'bi bi-lock-fill',
      bgColor: 'bg-gradient-auth',
      repo: 'https://github.com/you/auth-module',
      hover: false,
      showAll: false,
      descriptionPoints: [
        'Secure login/signup module using JWT and AuthGuard.',
        'Form validations, inline errors, and protected routing.',
        'Services and observables for token/state management.'
      ]
    }
  ];

  getVisiblePoints(project: any): string[] {
    return project.showAll ? project.descriptionPoints : project.descriptionPoints.slice(0, 3);
  }

}
