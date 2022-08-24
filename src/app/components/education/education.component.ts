import { TokenService } from './../../servicios/token.service';
import { EducacionService } from './../../servicios/educacion.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion: Educacion[]=[];
  educacionList:any;
  constructor(private datosPortfolio:PortfolioService, private educacionS:EducacionService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
     console.log(data);
      this.educacionList=data.education; 
    });
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data=>{
        this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.educacionS.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
