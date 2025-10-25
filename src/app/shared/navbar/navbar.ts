import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // ✅ usa 'styleUrls' (con 's')
})
export class Navbar {
  menuOptions = [
    { label: 'Home', route: '/home' },
    { label: 'Counter', route: '/counter' },
    { label: 'Structural directives', route: '/strutural-directives' },
    { label: 'Data Binding', route: '/data-binding' },
    { label: 'Attribute Directives', route: '/attribute-directives' },
    { label: 'Service', route: '/service' },
    { label: 'Examen', route: '/utvt' },
    { label: 'Pipes', route: '/pipes' },
  ];
}
