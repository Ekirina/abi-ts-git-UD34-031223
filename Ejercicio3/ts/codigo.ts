class Persona {
		
  protected readonly NOMBRE: string = "";
  protected readonly EDAD: number = 0;
  protected readonly DNI: string = "";
  protected readonly SEXODEFECTO: string = 'H';
  protected readonly PESO: number = 0;
  protected readonly ALTURA: number = 0;

  private nombre: string = this.NOMBRE;
	protected edad: number = this.EDAD;
	private dni: string = '';
	private sexo: string = this.SEXODEFECTO;
	protected peso: number = this.PESO;
	protected altura: number = this.ALTURA;

constructor(nombre: string, edad: number, dni: string, sexo: string, peso: number, altura: number) {
    //Poner el if de si lo que pasan está null
  }


} 
