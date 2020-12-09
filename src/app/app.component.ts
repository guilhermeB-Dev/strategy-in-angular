import { Component } from "@angular/core";

import { Acoes } from "./acoes";
import { Etf } from "./etf";
import { FundoImobiliario } from "./fundo-imobiliario";
import { GeneralCalculate } from "./general-calculate";
import { Poupanca } from "./poupanca";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  abs: GeneralCalculate = new GeneralCalculate();
  constructor() {}

  acoes: number;
  fundo: number;
  etf: number;
  poupanca: number;

  getValue() {
    let contribution: number;
    //this.abs = new Acoes();
    contribution = parseInt(prompt("Informe o aporte desejado: "));
    this.acoes = this.abs.generalCalculate(new Acoes(), contribution);
    this.fundo = this.abs.generalCalculate(new Etf(), contribution);
    this.etf = this.abs.generalCalculate(new FundoImobiliario(), contribution);
    this.poupanca = this.abs.generalCalculate(new Poupanca(), contribution);
  }
}
