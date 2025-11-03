import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-card.html'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;
  @Output() adicionarCarrinho = new EventEmitter<void>();
}