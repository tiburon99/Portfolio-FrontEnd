export class Experiencia {
    id?:number;
    nombreE: string;
    duracionE: string;
    descripcionE : string;
    imgExp: String;
    

    constructor(nombreE:string,  duracionE:string, descripcionE: string, imgExp: string){
        this.nombreE = nombreE;
        this.duracionE = duracionE;
        this.descripcionE = descripcionE;
        this.imgExp = imgExp;
        
    }

}
