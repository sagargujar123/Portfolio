import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TagModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = ['Angular', '.NET Core', 'Entity Framework', 'SQL Server', 'SCSS', 'PrimeNG', 'JWT Auth'];
}
