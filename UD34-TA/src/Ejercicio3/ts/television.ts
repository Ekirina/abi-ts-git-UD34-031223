import { Electrodomestico } from "./electrodomestico";

export class Televisor extends Electrodomestico{
    
    protected SINTONIZADOR: boolean = false;
	protected RESOLUCION: number = 20;
	
	protected resolucion = this.RESOLUCION;
	protected sintonizador = this.SINTONIZADOR;

    constructor(color: string, energia: string, precioBase: number, peso: number, resolucion: number, sintonizador: boolean){
        super(color, energia, precioBase, peso);
		this.sintonizador = sintonizador;
        this.resolucion = resolucion;
    }
    precioFinal() {
		let plusPrecio = 0;
		if (this.resolucion > 40) {
			plusPrecio += (super.getPrecioBase()/100)*30;
		}
		if (this.sintonizador) {
			plusPrecio +=50;
		}
		return super.precioFinal()+plusPrecio;
	}
    
    getResolucion(): number {
        return this.resolucion;
    }
        
    setResolucion(resolucion: number): void {
        this.RESOLUCION = resolucion;
    }

    getSintonizador(): boolean {
    return this.sintonizador;
    }
        
    setSintonizador(sintonizador: boolean): void {
    this.SINTONIZADOR = sintonizador;
    }
}