import { Component } from '@angular/core';
import { NavbarComponent } from './mycomponents/navbar/navbar';
import { ListaProdutosComponent } from './mycomponents/lista-produtos/lista-produtos';
import { CarrinhoComponent } from './mycomponents/carrinho/carrinho';
import { Produto } from '../app/shared/models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ListaProdutosComponent, CarrinhoComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  produtos: Produto[] = [
   new Produto(1,'Galeões de Ouro', 50, 15.90, 0, 'galeoes.jpg'),
    new Produto(2,'Espada Mata Serpentes de Gryffindor', 5, 899.90, 0, 'espada_mata_serpentes.webp'),
    new Produto(3,'Varinha do Professor Snape', 15, 149.90, 0, 'varinha_snape.webp'),
    new Produto(4,'Varinha das Varinhas (Elder Wand)', 8, 299.90, 0, 'varinha_elder_wand.webp'),
    new Produto(5,'Varinha do inominável', 10, 189.90, 0, 'varinha_do_que_nao_pode_ser_nomeado.webp'),
    new Produto(6,'Mapa do Maroto', 25, 79.90, 0, 'mapa_maroto.jpg'),
    new Produto(7,'Chapéu Seletor', 12, 249.90, 0, 'chapeu_seletor.jpg'),
    new Produto(8,'Caldeirão de Poções', 20, 129.90, 0, 'caldeirao.webp'),
    new Produto(9,'Caixa de Ovos de Dragão', 30, 45.90, 0, 'caixa_ovos.webp'),
    new Produto(10,'Livro de Poções Avançadas', 18, 89.90, 0, 'livro_pocoes.jpeg'),
    new Produto(11,'Moto Voadora', 3, 1499.90, 0, 'moto_voadora.webp'),
    new Produto(12,'Ticket Plataforma 9¾', 100, 12.90, 0, 'ticket_plataforma_934.jpg'),
    new Produto(13,'Vassoura Nimbus 2000', 15, 599.90, 0, 'vassoura_nimbus_2k.webp'),
    new Produto(14,'Vassoura Firebolt', 8, 1299.90, 0, 'vassoura_firebolt.webp')
  ];

  carrinho: Produto[] = [];
  router: any;

  
  onAdicionarAoCarrinho(produto: Produto) {
 
    const itemExistente = this.carrinho.find(p => p.id === produto.id);
    if (!itemExistente && produto.quantidade > 0) {
      this.carrinho.push({...produto});
      produto.quantidade = produto.quantidade - 1;
    }
  }

  
  onRemoverDoCarrinho(produto: Produto) {
    this.carrinho = this.carrinho.filter(p => p.id !== produto.id)
  }

 
  onFinalizarCompra() {
    if (this.carrinho.length > 0) {
      alert(`Compra finalizada! Total: R$ ${this.totalCarrinho.toFixed(2)}`);
      this.carrinho = [];
    }
  }

  onLimparCarrinho() {
    if (this.carrinho.length > 0){
      
      alert(`Carrinho esvaziado`)
      
      this.carrinho = [];
      
    }
  }
 
  get totalCarrinho(): number {
    return this.carrinho.reduce((total, produto) => total + produto.preco, 0);
  }

 
  get quantidadeCarrinho(): number {
    return this.carrinho.length;
  }



}