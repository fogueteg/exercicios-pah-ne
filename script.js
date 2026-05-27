// Atributos Privados yay
/*
class Cofre {
  #senha; 
  constructor(senha) {
    this.#senha = senha;
  }
  mostrarMensagem() {
    console.log("Cofre criado com sucesso!");
  }
}
const meuCofre = new Cofre("1234");

meuCofre.mostrarMensagem();
console.log(meuCofre.#senha);
*/
/*
class Carro {
  #quilometragem = 0;
  dirigir(km) {
    this.#quilometragem += km;
    console.log(`Quilometragem: ${this.#quilometragem} km`);
  }
}

const carro = new Carro();
carro.dirigir(50);
carro.dirigir(30);
*/
/*
class Conta {
  #saldo = 0;
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Saldo atual: R$ ${this.#saldo}`);
    } else {
      console.log("valor invalido");
}}}

const conta = new Conta();
conta.depositar(100);
conta.depositar(-50);
*/
/*
class Usuario {
  #nome;
  set nome(novoNome) {
    if (novoNome.length >= 3) {

      this.#nome = novoNome;
    } else {
      console.log("tem que ter mais de 3 cara"); }}

  get nome() {
    return this.#nome;  }}

const user = new Usuario();
user.nome = "Ana";
console.log(user.nome);
user.nome = "Jo";
*/
/*
class Configuracao {
  #idDoSistema;
  constructor(id) {
    this.#idDoSistema = id;
  }

  get idDoSistema() {
    return this.#idDoSistema;
  }}

const config = new Configuracao("system 32");
console.log(config.idDoSistema);
*/
/*
class Termometro {
  #celsius;
  constructor(celsius) {
    this.#celsius = celsius;
  }
  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;
  }}
const temp = new Termometro(30);
console.log(temp.fahrenheit + "°F");
*/
/*
class Login {
  #usuario;
  #senha;
  constructor(usuario, senha) {
    this.#usuario = usuario;
    this.#senha = senha;
  }
  autenticar(u, s) {
    return u === this.#usuario && s === this.#senha;
  }}

const login = new Login("ronaldo", "1234");
console.log(login.autenticar("ronaldo", "1234"));
console.log(login.autenticar("ronaldo", "6969"));
*/
/*
class Produto {
  #quantidade = 0;
  set quantidade(valor) {
    if (valor >= 0) {
      this.#quantidade = valor;
    } else {
      console.log("Estoque inválido!");
    }}
  get quantidade() {
    return this.#quantidade;
  }}

const produto = new Produto();
produto.quantidade = 10;
console.log(produto.quantidade);
produto.quantidade = -5;
*/
/*
class Pessoa {
  #cpf;
  constructor(cpf) {
    this.#cpf = cpf;
  }
  get cpfFormatado() {
    return `${this.#cpf.slice(0,3)}.${this.#cpf.slice(3,6)}.${this.#cpf.slice(6,9)}-${this.#cpf.slice(9,11)}`;
  }
}
const pessoa = new Pessoa("3890247541234");
console.log(pessoa.cpfFormatado);
*/
/*
class SmartLamp {
  #brilho = 50;
  aumentar() {
    if (this.#brilho < 100) {
      this.#brilho += 10;
    }
    console.log(`Brilho: ${this.#brilho}%`);
  }
  diminuir() {
    if (this.#brilho > 0) {
      this.#brilho -= 10;
    }
    console.log(`Brilho: ${this.#brilho}%`);
  }}

const lampada = new SmartLamp();
lampada.aumentar();
lampada.aumentar();
lampada.diminuir();
*/
// Polimorfismo na POO yay
/*
class Animal {
  emitirSom() {
    console.log("O animal fez um som.");
  }}
class Cachorro extends Animal {
  emitirSom() {
    console.log(" au au");
  }}

class Gato extends Animal {
  emitirSom() {
    console.log("miau :3");
  }}

const cachorro = new Cachorro();
const gato = new Gato();
cachorro.emitirSom();
*/
/*
class Funcionario {
  calcularBonus() {
    return 500;
  }}

class Gerente extends Funcionario {
  calcularBonus() {
    return 500 + 2000;
  }}

const funcionario = new Funcionario();
const gerente = new Gerente();
console.log(funcionario.calcularBonus());
console.log(gerente.calcularBonus());
*/
/*
class Arquivo {
  abrir() {
    console.log("Abrindo arquivo...");
  }}
class ArquivoTexto extends Arquivo {
  abrir() {
    console.log("mostrando letras");
  }}

class ArquivoVideo extends Arquivo {
  abrir() {
    console.log("iniciando video");
  }}

const texto = new ArquivoTexto();
const video = new ArquivoVideo();
texto.abrir();
video.abrir();
*/
/*
class Arma {
  atirar() {
    console.log("Atirando...");
  }}
class Pistola extends Arma {
  atirar() {
    console.log("🔫");
  }}

class Metralhadora extends Arma {
  atirar() {
    console.log("💥💥💥💥");
  }}

const pistola = new Pistola();
const metralhadora = new Metralhadora();
pistola.atirar();
metralhadora.atirar();
*/
/*
class Forma {
  desenhar() {
    console.log("Desenhando forma...");
  }}
class Circulo extends Forma {
  desenhar() {
    console.log("⭕");
  }}

class Quadrado extends Forma {
  desenhar() {
    console.log("⬜");
  }}

const circulo = new Circulo();
const quadrado = new Quadrado();
circulo.desenhar();
quadrado.desenhar();
*/
/*
class Transporte {
  viajar() {
    console.log("Viajando...");
  }}

class Trem extends Transporte {
  viajar() {
    console.log("o trem anda pelos trilhos.");
  }}

class Aviao extends Transporte {
  viajar() {
    console.log("o avião voa pelos céus.");
  }}

const trem = new Trem();
const aviao = new Aviao();
trem.viajar();
aviao.viajar();
*/
/*
class Pagamento {
  constructor(valor) {
    this.valor = valor;
  }
  processar() {
    return this.valor;
  }}

class Credito extends Pagamento {
  processar() {
    return this.valor + (this.valor * 0.05);
  }}

class Pix extends Pagamento {
  processar() {
    return this.valor - (this.valor * 0.10);
  }}

const credito = new Credito(100);
const pix = new Pix(100);
console.log("Crédito:", credito.processar());
console.log("Pix:", pix.processar());
*/
/*
const pagamentos = [
  new Credito(200),
  new Pix(200),
  new Credito(500)
];
for (let pagamento of pagamentos) {
  console.log("Valor final:", pagamento.processar());
}
*/
/*
class Personagem {
  defender() {
    console.log("Defendendo...");
  }}

class Heroi extends Personagem {
  defender() {
    console.log("🛡️herói defendeu com escudo");
  }}

class Vilao extends Personagem {
  defender() {
    console.log("o vilão evil desvia 😱");
  }}

const heroi = new Heroi();
const vilao = new Vilao();
heroi.defender();
vilao.defender();
*/
/*
class Produto {
  constructor(preco) {
    this.preco = preco;
  }
  calcularFrete() {
    return 0;
  }}

class ProdutoDigital extends Produto {
  calcularFrete() {
    return 0;
  }}

class ProdutoFisico extends Produto {
  calcularFrete() {
    return 20;
  }}

const ebook = new ProdutoDigital(50);
const celular = new ProdutoFisico(2000);
console.log("Frete Ebook: R$", ebook.calcularFrete());
console.log("Frete Celular: R$", celular.calcularFrete());
*/