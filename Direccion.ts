export class Direccion{

     calle: string;
     numero: number;
     piso: number;
     letra: string;
     codigo_postal: number;
     poblacion: string;
     provincia: string;
     
     constructor(a: string, b: number, c: number, d: string, e: number, f: string, g: string ){
          this.calle = a;
          this.numero = b;
          this.piso = c;
          this.letra = d;
          this.codigo_postal = e;
          this.poblacion = f;
          this.provincia = g;
          
     }
      public getCalle(){
          return this.calle;
      }
  
      public setCalle(c: string){
          this.calle = c;
      }
  
      public getNumero(){
          return this.numero;
      }
  
      public setNumero(n: number){
          this.numero = n;
      }

      public getPiso(){
        return this.piso;
    }

    public setPiso(piso: number){
        this.piso = piso;
    }
      public getLetra(){
          return this.letra;
      }
  
      public setLetra(l: string){
          this.letra = l;
      }
      public getCodigoPostal(){
        return this.codigo_postal;
    }

      public setCodigoPostal(cod: number){
        this.codigo_postal = cod;
    }
    public getPoblacion(){
        return this.poblacion;
    }

    public setPoblacion(p: string){
        this.poblacion = p;
    }
    public getProvincia(){
        return this.provincia;
    }

      public setProvinvia(prov: string){
        this.provincia = prov;
    }

    setDireccion(ncalle: string, nnum: number, npiso:number, nletra: string, ncodpostal: number, npobl: string, nprov: string){
        this.calle = ncalle;
        this.numero = nnum;
        this.piso = npiso;
        this.letra = nletra;
        this.codigo_postal = ncodpostal;
        this.poblacion = npobl;
        this.provincia = nprov;


    }

}

