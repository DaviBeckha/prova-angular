import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.html'
})
export class CarrinhoComponent {
  @Input() carrinho: Produto[] = [];
  @Input() total: number = 0;
  @Output() remover = new EventEmitter<Produto>();
  @Output() finalizar = new EventEmitter<void>();
  @Output() limparCarrinho = new EventEmitter<void>();
}