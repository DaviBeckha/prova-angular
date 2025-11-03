import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  @Input() quantidadeCarrinho: number = 0;
  @Input() totalCarrinho: number = 0;
}