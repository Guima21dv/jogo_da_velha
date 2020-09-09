import { Component, OnInit } from '@angular/core'
import { JogoDaVelhaService } from './shared'

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar()
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   *
   * @return boolean
   */
  get mostrarInicio(): boolean {
    return this.jogoDaVelhaService.mostrarInicio
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   *
   * @return boolean
   */
  get mostrarTabuleiro(): boolean {
    return this.jogoDaVelhaService.mostrarTabuleiro
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida
   *
   * @return boolean
   */
  get mostrarFinal(): boolean {
    return this.jogoDaVelhaService.mostrarFinal
  }
  /**
   * Inicializa os dados de um novo jogo
   *
   * @return void
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo()
  }

  /**
   * Realiza uma jogada ao clicar no tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY)
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY)
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada.
   *
   * @param posX
   * @param posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY)
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a coordenada informada.
   *
   * @param posX
   * @param posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX,posY)
  }

  /**
   * Retorna o número do jogador a jogar
   *
   * @return number
   */
  get jogador(): number{
    return this.jogoDaVelhaService.jogador
  }

  /**
   * Inicia um novo jogo.
   *
   * @return void
   */
  novoJogo():void{
    this.jogoDaVelhaService.novoJogo()
  }

}
