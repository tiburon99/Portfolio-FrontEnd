import { ActivatedRoute, Router } from '@angular/router';
import { AboutmeService } from './../../servicios/aboutme.service';
import { Aboutme } from './../../model/aboutme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {
  aboutme: Aboutme = null;

  constructor(private sAboutme: AboutmeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAboutme.detail(id).subscribe(
      data =>{
        this.aboutme = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAboutme.update(id, this.aboutme).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Sección modificada")
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
    }

  

}
