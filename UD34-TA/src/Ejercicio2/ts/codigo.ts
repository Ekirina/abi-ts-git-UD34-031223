export class Password {
	
	
	protected LONGITUD: number = 8;
	protected CONTRASENYA: string = "";

  protected longitud: number = this.LONGITUD;
	private contrasenya: string = this.CONTRASENYA;

constructor(longitud: number) {
    if (longitud == null) {
      this.LONGITUD = 8;
    }
    this.CONTRASENYA = this.generador(longitud);
}

private generador(longitud:number): string {
  const opciones = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789";
  let opcionesRandom = '';
	for(let i = 0; i<longitud; i++) {
        const contrasenya = (Math.random()*opciones.length);
        opcionesRandom = opciones.charAt(contrasenya);
        this.CONTRASENYA += opcionesRandom;
}
  return(this.CONTRASENYA);
}

  getContrasenya(): string {
  return this.contrasenya;
  }

  setContrasenya(contrasenya: string): void{
    this.CONTRASENYA = contrasenya;
  }
}

const pass = new Password(8);
console.log(`Contraseña predeterminada: ${pass.getContrasenya()}`);

const passnew = new Password(10);
console.log(`Contraseña personalizada: ${passnew.getContrasenya()}`);