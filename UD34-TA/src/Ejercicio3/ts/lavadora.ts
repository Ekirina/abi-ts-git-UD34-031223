import { Electrodomestico } from "./electrodomestico";

export class Lavadora extends Electrodomestico{
    
    protected CARGA: number = 5;
    
    protected carga = this.CARGA;
        
    constructor(carga: number, color: string, energia: string, precioBase: number, peso: number){
        super(color, energia, precioBase, peso);
		this.CARGA = carga;
    }
        precioFinal() {
		let total: number = super.precioFinal();
		if (this.carga>30) {
			total=(total+50);
		}
		return total;
	}

    getCarga(): number {
    return this.carga;
    }
    
    setCarga(carga: number): void {
    this.CARGA = carga;
    }
    
}