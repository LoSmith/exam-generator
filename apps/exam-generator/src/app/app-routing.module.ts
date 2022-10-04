import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { NgModule } from "@angular/core";
import { ShellModule } from "./shell/shell.module";
import { AboutComponent } from "./about/about.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "task-list",
        component: TaskListComponent
      },
      {
        path: "task-edit/:id",
        component: TaskEditComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
