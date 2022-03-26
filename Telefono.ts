export class Telefono{
     tipo: string;
     numero: number;

     constructor(a: string, b: number){
          this.tipo = a;
          this.numero = b;

     }
     public getTipo(){
          return this.tipo;
      }
 
      public setTipo(tel: string){
          this.tipo = tel;
      }
 
      public getNumero(){     
          return this.numero;
     
      }
 
      public setNumero(num: number){
          this.numero = num;
      }

      public setTelefono(ntipo: string, nnum: number){
          this.tipo = ntipo;
          this.numero = nnum;
      }
}

