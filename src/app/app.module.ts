import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ButtonComponent } from './core/button/button.component';
import { TasksComponent } from './core/tasks/tasks.component';
import { TaskItemComponent } from './core/task-item/task-item.component';
import { AddTaskComponent } from './core/add-task/add-task.component';
import { AboutComponent } from './core/about/about.component';
import { FooterComponent } from './core/footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
