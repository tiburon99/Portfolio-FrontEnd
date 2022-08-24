import { AboutmeService } from './../../servicios/aboutme.service';
import { Aboutme } from './../../model/aboutme';
import { Component, OnInit } from '@angular/core';

import { TokenService } from './../../servicios/token.service';

import { PersonaService } from './../../servicios/persona.service';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: persona = new persona("","","");
  aboutme: Aboutme[]=[];
  sobreMi:any;

  constructor(private aboutmeS: AboutmeService, private tokenService: TokenService, private datosPortfolio:PortfolioService, public personaService:PersonaService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }


    this.datosPortfolio.obtenerDatos().subscribe(data=>{ console.log(data);
      this.sobreMi=data.aboutMe;
    })

    this.personaService.getPersonas().subscribe(data =>{ this.persona=data})
  }

  cargarAboutme(): void{
    this.aboutmeS.lista().subscribe(
      data=>{
        this.aboutme = data;
      }
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.aboutmeS.delete(id).subscribe(
        data=>{
          this.cargarAboutme();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }


}
