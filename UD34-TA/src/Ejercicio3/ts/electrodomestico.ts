export class Electrodomestico {

  protected COLOR: string = "BLANCO";
	protected ENERGIA: string = 'F';
	protected PRECIOBASE: number = 100;
	protected PESO: number = 5;
		
  protected color = this.COLOR;
	protected energia = this.ENERGIA;
	protected precioBase = this.PRECIOBASE;
	protected peso = this.PESO;

  constructor(color?: string, energia?: string, precioBase?: number, peso?: number){
    if (typeof peso !== 'undefined') {
      this.peso = peso;
    }
    if (typeof precioBase !== 'undefined') {
      this.precioBase = precioBase;
    }else{
      this.precioBase = this.precioFinal()
    }
    if (typeof energia !== 'undefined') {
      this.energia = energia;
    }else{
      this.energia = this.comprobarEnergia(this.energia)
    }
    if (typeof color !== 'undefined') {
      this.color = color;
    }else{
      this.color = this.comprobarColor(this.color)
    }
}

  protected precioFinal(){
    let precioFinal: number = this.precioBase;  
		if(this.energia == 'A') { precioFinal = precioFinal + 100;}
		if(this.energia == 'B') { precioFinal = precioFinal + 80; }
		if(this.energia == 'C') { precioFinal = precioFinal + 60; }
		if(this.energia == 'D') { precioFinal = precioFinal + 50; }
		if(this.energia == 'E') { precioFinal = precioFinal + 30; }
		if(this.energia == 'F') { precioFinal = precioFinal + 10; }
		
		if(this.peso >= 0 && this.peso <= 19) { precioFinal = precioFinal + 10; }
		if(this.peso >= 20 && this.peso <= 49) { precioFinal = precioFinal + 50; }
		if(this.peso >= 50 && this.peso <= 79) { precioFinal = precioFinal + 80; }
		if(this.peso >= 80) { precioFinal = precioFinal + 100; }
		
		return precioFinal;
  }
  
  protected comprobarEnergia(energia: string) {
		if (energia == 'A' || energia == 'B' || energia == 'C' || energia == 'D' || energia == 'E' || energia == 'F')  {
            return energia;
        } else {
            return this.ENERGIA;
        }
	}
  
  protected comprobarColor(color: string) {
		if (color.toUpperCase() == "BLANCO" || color.toUpperCase() == "ROJO" || color.toUpperCase() == "AZUL" || color.toUpperCase() == "NEGRO" || color.toUpperCase() == "GRIS")  {
            return color;
        } else {
            return this.ENERGIA;
        }
  }
          getColor(): string {
          return this.color;
          }
      
          setColor(color: string): void {
          this.COLOR = color;
          }
      
          getEnergia(): string {
          return this.energia;
          }
      
          setEnergia(energia: string): void {
          this.ENERGIA = energia;
          }
      
          getPrecioBase(): number {
          return this.precioBase;
          }
      
          setPrecioBase(precioBase: number): void {
          this.PRECIOBASE = precioBase;
          }
      
          getPeso(): number {
          return this.peso;
          }
      
          setPeso(peso: number): void {
          this.PESO = peso;
          }

}