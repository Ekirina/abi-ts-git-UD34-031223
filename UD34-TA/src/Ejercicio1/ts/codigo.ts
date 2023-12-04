export class Persona {
		
  protected NOMBRE: string = "";
  protected EDAD: number = 0;
  protected readonly DNI: string = "";
  protected SEXODEFECTO: string = 'H';
  protected PESO: number = 0;
  protected ALTURA: number = 0;

  private nombre: string = this.NOMBRE;
	protected edad: number = this.EDAD;
	private dni: string = '';
	private sexo: string = this.SEXODEFECTO;
	protected peso: number = this.PESO;
	protected altura: number = this.ALTURA;

constructor(nombre: string, edad: number, dni: string, sexo: string, peso: number, altura: number) {
    if (sexo == null) {
      this.SEXODEFECTO = 'H'
    }
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura
  }

    getNombre(): string {
    return this.nombre;
    }

    setNombre(nombre: string): void {
    this.NOMBRE = nombre;
    }

    getEdad(): number {
    return this.EDAD;
    }

    setEdad(edad: number): void {
    this.EDAD = edad;
    }

    getDNI(): string {
    return this.dni;
    }

    getSexo(): string {
    return this.sexo;
    }

    setSexo(sexo: string): void {
    this.sexo = sexo;
    }

    getPeso(): number {
    return this.peso;
    }

    setPeso(peso: number): void {
    this.PESO = peso;
    }

    getAltura(): number {
    return this.altura;
    }

    setAltura(altura: number): void {
    this.ALTURA = altura;
    }
  

}
    const persona1 = new Persona('Zoe', 6, '87576767A', 'M', 20, 1.35);
    const persona2 = new Persona('Obito', 5, '98765432O', 'H', 15, 1.20);
    const persona3 = new Persona('Sergio', 38, '87654321S', '', 70, 1.82);

    console.log(persona1);
    console.log(persona2);
    console.log(persona3);