export class Banner {

    id?:number;
    nombreBanner: string;
    ubicacionBanner: string;

    constructor(nombreBanner: string, ubicacionBanner: string){
        this.nombreBanner=nombreBanner;
        this.ubicacionBanner=ubicacionBanner;
    }
}
