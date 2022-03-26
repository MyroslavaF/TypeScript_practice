import {Person} from "./Person";
import {Direccion} from "./Direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";

var mail1 = new Mail("casa", "elemplo1@gmail.com");
var direccion1 = new Direccion("c/Jupiter", 2, 12, "C", 12345, "Madrid", "Madrid");
var telefono1 = new Telefono("fijo", 98765432);
var persona1 = new Person("Anna", "Fernandez", 34, "1234567U", "22-12-1987", "rojo", "f", "vecina", direccion1, telefono1, mail1);

var mail2 = new Mail("trabajo", "elemplo2@gmail.com");
var direccion2 = new Direccion("c/Venus", 3, 10, "A", 23456, "Toledo", "Toledo");
var telefono2 = new Telefono("movil", 6012345678);
var persona2 = new Person("Raul", "Martinez", 34, "09876543E", "12-10-1987", "verde", "m", "compi", direccion2, telefono2, mail2);

var mail3 = new Mail("otro", "elemplo3@gmail.com");
var direccion3 = new Direccion("c/Saturno", 4, 11, "D", 34567, "Salamanca", "Salamanca");
var telefono3 = new Telefono("movil", 64345676);
var persona3 = new Person("Pedro", "Garcia", 34, "87678769Y", "06-10-1987", "morado", "m", "peluquero", direccion3, telefono3, mail3);

console.log("Persona 1");
console.log(persona1.toString());
console.log("Persona 2");
console.log(persona2.toString());
console.log("Persona 3");
console.log(persona3.toString());

persona1.mails.setCambiarMail("trabajo", "nuevoEjemplo@gmail.com");
persona1.telefonos.setTelefono("movil", 606129615);
persona1.direcciones.setDireccion("c/Sol", 1, 13, "E", 10001, "Valdemoro", "Madrid");

console.log("Registro despues de cambios")
console.log(persona1.toString());









