import { Router } from '@angular/router';
import { BannerService } from './../../servicios/banner.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';

@Component({
  selector: 'app-new-hero-image',
  templateUrl: './new-hero-image.component.html',
  styleUrls: ['./new-hero-image.component.css']
})
export class NewHeroImageComponent implements OnInit {

  nombreBanner:string='';
  ubicacionBanner:string='';

  constructor(private sBanner: BannerService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const banner = new Banner(this.nombreBanner, this.ubicacionBanner);
    this.sBanner.save(banner).subscribe(
      data=>{alert("Banner añadido");
      this.router.navigate(['']);
    
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    
    )
  }


}
