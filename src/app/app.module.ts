import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialMediaBtnsComponent } from './components/social-media-btns/social-media-btns.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewHeroImageComponent } from './components/hero-image/new-hero-image.component';
import { EditHeroImageComponent } from './components/hero-image/edit-hero-image.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NewAboutMeComponent } from './components/about-me/new-about-me.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { NewProyectsComponent } from './components/proyects/new-proyects.component';
import { EditProyectsComponent } from './components/proyects/edit-proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { ContactComponent } from './components/contact/contact.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    LogoAPComponent,
    SocialMediaBtnsComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducationComponent,
    FooterComponent,
    ProyectsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHeroImageComponent,
    EditHeroImageComponent,
    NewAboutMeComponent,
    EditAboutMeComponent,
    NewProyectsComponent,
    EditProyectsComponent,
    SkillsComponent,
    NewSkillComponent,
    EditSkillComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    NgxScrollTopModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
