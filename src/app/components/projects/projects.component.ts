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
      title: 'Restaurant Admin Portal',
      description: 'Full-stack app using Angular, .NET, SQL Server, and JWT Auth.',
    },
    {
      title: 'Inventory Management',
      description: 'Includes pagination, search filters, and CRUD with validation.',
    },
  ];
}
