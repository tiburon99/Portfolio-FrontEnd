import { Router } from '@angular/router';
import { SkillsService } from './../../servicios/skills.service';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSkill: string = '';
  porcentajeSkill: number;

  constructor(private skillService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombreSkill, this.porcentajeSkill);
    this.skillService.save(skill).subscribe(
      (data) => {
        alert('Skill añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }

}
