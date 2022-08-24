import { Aboutme } from './../../model/aboutme';
import { Router } from '@angular/router';
import { AboutmeService } from './../../servicios/aboutme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  tituloA: string = '';
  saludoA: string = '';
  descripcionA: string = '';
  imgA: string = '';


  constructor(private sAboutme: AboutmeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const aboutme = new Aboutme(this.tituloA, this.saludoA, this.descripcionA, this.imgA);
    this.sAboutme.save(aboutme).subscribe(
      data=>{alert("Sección añadida.");
      this.router.navigate(['']);
    
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    
    )
  }


}
