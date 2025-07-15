import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
items = [
    { label: 'About', command: () => this.scrollTo('about') },
    { label: 'Skills', command: () => this.scrollTo('skills') },
    { label: 'Projects', command: () => this.scrollTo('projects') },
    { label: 'Contact', command: () => this.scrollTo('contact') },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  
}
