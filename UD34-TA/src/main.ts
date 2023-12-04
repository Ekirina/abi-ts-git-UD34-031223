import { Persona } from "./Ejercicio1/ts/codigo.ts";
import { Password } from "./Ejercicio2/ts/codigo.ts";
import {Electrodomestico} from "./Ejercicio3/ts/electrodomestico.ts";
import { Lavadora } from "./Ejercicio3/ts/lavadora.ts";
import { Televisor } from "./Ejercicio3/ts/television.ts";

    let electrodomesticos: Electrodomestico[] = [];

		electrodomesticos.push(new Lavadora(3.9,"blanco",'A',50, 2.5));
    electrodomesticos.push(new Televisor("negro", 'A', 1500, 6, 200, true));

    let password: Password[] = [];

    password.push(new Password(8));

    let persona: Persona[] = [];

    persona.push(new Persona('Carla', 25, '12345678K', 'M', 60, 1.75));

    console.log(electrodomesticos);
    console.log(password);
    console.log(persona);