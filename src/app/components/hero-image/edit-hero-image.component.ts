import { BannerService } from './../../servicios/banner.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hero-image',
  templateUrl: './edit-hero-image.component.html',
  styleUrls: ['./edit-hero-image.component.css']
})
export class EditHeroImageComponent implements OnInit {

  banner: Banner = null;
  constructor(private sBanner: BannerService, private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sBanner.detail(id).subscribe(
      data =>{
        this.banner = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sBanner.update(id, this.banner).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Banner modificado")
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }


}
