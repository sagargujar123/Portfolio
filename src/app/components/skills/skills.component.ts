import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    TagModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills = [
    {
      name: 'Angular',
      icon: 'bi bi-code-slash',
      class: 'angular',
      description: 'SPA framework using TypeScript.'
    },
    {
      name: 'TypeScript',
      icon: 'bi bi-filetype-tsx',
      class: 'typescript',
      description: 'Typed superset of JavaScript.'
    },
    {
      name: 'JavaScript',
      icon: 'bi bi-filetype-js',
      class: 'javascript',
      description: 'Core scripting for web apps.'
    },
    {
      name: 'RxJS',
      icon: 'bi bi-infinity',
      class: 'rxjs',
      description: 'Reactive programming library.'
    },
    {
      name: 'NgRx',
      icon: 'bi bi-lightning-fill',
      class: 'ngrx',
      description: 'State management for Angular.'
    },
    {
      name: 'Bootstrap',
      icon: 'bi bi-bootstrap',
      class: 'bootstrap',
      description: 'Responsive CSS framework.'
    },
    {
      name: 'SCSS',
      icon: 'bi bi-palette-fill',
      class: 'scss',
      description: 'CSS with variables and nesting.'
    },
    {
      name: 'HTML',
      icon: 'bi bi-filetype-html',
      class: 'html',
      description: 'Markup language for web UI.'
    },
    {
      name: 'CSS',
      icon: 'bi bi-filetype-css',
      class: 'css',
      description: 'Styling for HTML content.'
    },
    {
      name: 'JWT',
      icon: 'bi bi-shield-lock-fill',
      class: 'jwt',
      description: 'Token-based auth for APIs.'
    },
    {
      name: 'React Native',
      icon: 'bi bi-phone',
      class: 'reactnative',
      description: 'Cross-platform mobile framework.'
    }
  ];
}
