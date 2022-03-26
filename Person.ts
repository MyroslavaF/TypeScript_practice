import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Person {

    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumple: string;
    colorFavorito: string;
    sexo: string;
    notas: string;
    direcciones: Direccion;
    telefonos: Telefono;
    mails: Mail;    
     

     constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: string, colorFavorito: string,
        sexo: string, notas: string, direccion: Direccion, telefono: Telefono, mail: Mail ){
           
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.dni = dni;
            this.cumple = cumple;
            this.colorFavorito = colorFavorito;
            this.sexo = sexo;
            this.notas = notas;
            this.direcciones = direccion;
            this.telefonos = telefono;
            this.mails = mail;
    }

    public getNombre() {
        return this.nombre;
    }

    public setNombre(n: string) {
        this.nombre = n;
    }

    public getApellidos() {
        return this.apellidos;
    }

    public setApellidos(a: string) {
        this.apellidos = a;
    }

    public getEdad(){
        return this.edad;
    }

    public setEdad(e: number) {
        this.edad = e;
    }

    public getDni(){
        return this.dni;
    }

    public setDni(d: string){
        this.dni = d;
    }

    public getCumple(){
        return this.cumple;
    }

    public setCumple (c: string){
        this.cumple = c;
    }

    public getColorFavorito(){
        return this.colorFavorito;
    }

    public setColorFavorito(cf: string){
        this.colorFavorito = cf;
    }

    public getSexo(){
        return this.sexo;
    }

    public setSexo(s: string){
        this.sexo = s;
    }


    public getNotas(){
        return this.notas;
    }

    public setNotas(nt: string){
        this.notas = nt;
    } 
    
    public setMails(ntipo: string, ndir: string){
        Mail.tipo = ntipo;
        Mail.dir = ndir;

    }

toString(): string {
         return  `
                 Nombre: ${this.nombre} 
                 Apellidos: ${this.apellidos} 
                 Edad: ${this.edad} 
                 DNI: ${this.dni} 
                 Cumleaños: ${this.cumple}
                 Color Favorito: ${this.colorFavorito}
                 Sexo: ${this.sexo}
                 Notas:  ${this.notas} 
                 Direcciones:
                 --calle: ${this.direcciones.calle}
                 --numero: ${this.direcciones.numero} 
                 --piso: ${this.direcciones.piso} 
                 --letra: ${this.direcciones.letra}
                 --código postal: ${this.direcciones.codigo_postal} 
                 --poblacion: ${this.direcciones.poblacion} 
                 --provincia: ${this.direcciones.provincia} 
                 Telefonos: 
                 --tipo: ${this.telefonos.tipo} 
                 --numero: ${this.telefonos.numero} 
                 Email: 
                 --tipo: ${this.mails.tipo} 
                 --numero: ${this.mails.dir} 

                 `;

     }

}