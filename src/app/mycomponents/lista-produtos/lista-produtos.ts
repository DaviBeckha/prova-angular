import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoCardComponent } from '../produto-card/produto-card';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule, ProdutoCardComponent],
  templateUrl: './lista-produtos.html'
})
export class ListaProdutosComponent {
  @Input() produtos: Produto[] = [];
  @Output() adicionarCarrinho = new EventEmitter<Produto>();

  filtroNome = '';
  // filtroCategorias: string[] = [];
  ordenacao = 'nome';

  // categorias = ['Eletrônicos', 'Informática', 'Vestuário', 'Esportes', 'Áudio'];
  // opcoesOrdenacao = [
  //   { valor: 'nome', texto: 'Nome A-Z' },
  //   { valor: 'preco', texto: 'Menor Preço' },
  //   { valor: 'precoDesc', texto: 'Maior Preço' },
  //   { valor: 'marca', texto: 'Marca' }
  // ];

  // onCategoriaChange(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const valor = input.value;

  //   if (input.checked) {
  //     this.filtroCategorias.push(valor);
  //   } else {
  //     this.filtroCategorias = this.filtroCategorias.filter(c => c !== valor);
  //   }
  // }

  onOrdenacaoChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.ordenacao = select.value;
  }

  get produtosFiltrados(): Produto[] {
    let produtos = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );

    
  

    // switch (this.ordenacao) {
    //   case 'nome':
    //     produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    //     break;
    //   case 'preco':
    //     produtos.sort((a, b) => a.preco - b.preco);
    //     break;
    //   case 'precoDesc':
    //     produtos.sort((a, b) => b.preco - a.preco);
    //     break;
    // }

    return produtos;
  }
}