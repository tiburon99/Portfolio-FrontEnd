import { TokenService } from './../../servicios/token.service';
import { BannerService } from './../../servicios/banner.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {

  banner: Banner[]=[];
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService, private bannerS: BannerService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {

    this.cargarBanner();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }



    this.datosPortfolio.obtenerDatos().subscribe(data =>{
     console.log(data);
     this.miPortfolio=data.heroImage; 
    });
  }

  cargarBanner(): void{
    this.bannerS.lista().subscribe(
      data=>{
        this.banner = data;
      }
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.bannerS.delete(id).subscribe(
        data=>{
          this.cargarBanner();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }

  }
}