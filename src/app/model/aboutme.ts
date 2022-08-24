export class Aboutme {

    id?:number;
    tituloA: string;
    saludoA: string;
    descripcionA: string;
    imgA: string;

    constructor(tituloA: string, saludoA: string, descripcionA: string, imgA:string){
        this.tituloA=tituloA;
        this.saludoA=saludoA;
        this.descripcionA=descripcionA;
        this.imgA=imgA;

    }
}
