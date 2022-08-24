import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

import { EditProyectsComponent } from './components/proyects/edit-proyects.component';
import { NewProyectsComponent } from './components/proyects/new-proyects.component';
import { NewAboutMeComponent } from './components/about-me/new-about-me.component';
import { EditHeroImageComponent } from './components/hero-image/edit-hero-image.component';
import { NewHeroImageComponent } from './components/hero-image/new-hero-image.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component:EditEducacionComponent},
  {path:'nuevobanner', component:NewHeroImageComponent},
  {path:'editbanner/:id', component:EditHeroImageComponent},
  {path:'nuevoaboutme', component: NewAboutMeComponent},
  {path:'editaboutme/:id', component:EditAboutMeComponent},
  {path:'nuevoproyecto', component:NewProyectsComponent},
  {path:'editproyecto/:id', component: EditProyectsComponent},
  {path:'nuevaskill' , component:NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
