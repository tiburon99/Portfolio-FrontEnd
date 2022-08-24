export class Proyectos {

    id?: number;
    tituloP: string;
    descripcionP: string;
    imgProyecto: string;

    constructor(tituloP: string, descripcionP: string, imgProyecto: string){
        this.tituloP=tituloP;
        this.descripcionP=descripcionP;
        this.imgProyecto=imgProyecto;
    }
}
