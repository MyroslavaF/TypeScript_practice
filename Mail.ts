export class Mail{
    
    tipo: string;
    dir: string;
    static tipo: string;
    static dir: string;

    constructor(a: string, b: string) { 
        this.tipo = a;
        this.dir = b;
     } 

     public getTipoEmail(){
         return this.tipo;
     }

     public setTipoEmail(mail: string){
         this.tipo = mail;
     }

     public getDireccionMail(){     
         return this.dir;
    
     }

     public setDireccionMail(direcc: string){
         this.dir = direcc;
     }

     public setCambiarMail(ntipo: string, ndir: string){
         this.tipo = ntipo;
         this.dir = ndir;
     }
    
  }

  


