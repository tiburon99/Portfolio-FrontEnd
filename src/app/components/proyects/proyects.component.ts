import { TokenService } from './../../servicios/token.service';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: Proyectos[]=[];
  proyectsList:any;
  constructor(private proyectoS: ProyectosService, private tokenService: TokenService, private datosPortfolio:PortfolioService) { }
  
  isLogged = false;
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{ console.log(data);
      this.proyectsList=data.proyects;
    })

    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
    
  }

  cargarProyectos(): void{
    this.proyectoS.lista().subscribe(
      data=>{
        this.proyectos = data;
      }
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.proyectoS.delete(id).subscribe(
        data=>{
          this.cargarProyectos();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }

  }
}
