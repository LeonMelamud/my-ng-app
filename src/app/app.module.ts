import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ClassComponentComponent } from './class-component/class-component.component';
import { CoursesComponent } from './courses/courses.component';
import { LogService } from './log.service';
import { LogTestComponent } from './log-test/log-test.component';
import { LogPublishersService } from './log-publisher.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ClassComponentComponent,
    CoursesComponent,
    LogTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  //need to add depencdny for using dependency injaction
  providers: [
    CoursesService,
    LogService,
    LogPublishersService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
