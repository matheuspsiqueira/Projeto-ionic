// Importação das bibliotecas e módulos necessários.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Decorator que define a classe como um componente e especifica seus metadados.
@Component({
  selector: 'app-home',             // O nome do seletor CSS para o componente.
  templateUrl: 'home.page.html',    // Caminho para o arquivo HTML do componente.
  styleUrls: ['home.page.scss'],    // Caminho para o arquivo CSS do componente.
})
export class HomePage {

  // Variáveis que irão armazenar os valores inseridos pelo usuário nos campos de login.
  username: string = '';
  password: string = '';

  // Definição de um usuário e senha mockados para fins de teste.
  private MOCKED_USERNAME: string = 'admin';
  private MOCKED_PASSWORD: string = '123456';

  // O construtor é chamado quando uma instância da classe é criada. 
  // Aqui estamos injetando o serviço 'Router' para usar em nossa classe.
  constructor(private router: Router) {}

  // Método chamado quando o botão "Entrar" é pressionado.
  onLogin() {
    // Verificamos se o nome de usuário e a senha inseridos correspondem aos valores mockados.
    if (this.username === this.MOCKED_USERNAME && this.password === this.MOCKED_PASSWORD) {
      // Se forem corretos, mostramos um alerta informando que o login foi bem-sucedido.
      alert('Login bem-sucedido!');

      // Navegamos para a "novapagina" utilizando o serviço de roteamento.
      this.router.navigate(['/novapagina']);
    } else {
      // Se não forem corretos, mostramos um alerta informando que o usuário ou a senha estão incorretos.
      alert('Usuário ou senha incorretos!');
    }
  }
}