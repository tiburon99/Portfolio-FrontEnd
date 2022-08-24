export class Educacion {

    id?: number;
    nombreE: string;
    duracionE: string;
    descripcionE: string;
    imgEdu: string;

    constructor(nombreE: string, duracionE:string, descripcionE: string, imgEdu: string){
        this.nombreE=nombreE;
        this.duracionE=duracionE;
        this.descripcionE=descripcionE;
        this.imgEdu=imgEdu;
    }
}
