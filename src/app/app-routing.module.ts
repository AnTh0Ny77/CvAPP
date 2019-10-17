import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent} from './timeline/timeline.component'
import { Error404Component } from "./error404/error404.component";
import { FrontComponent } from "./front/front.component";
import { BackComponent } from "./back/back.component";

const routes: Routes = [
  {path: 'timeline',component: TimelineComponent},
  {path: 'front', component: FrontComponent},
  {path: 'back',component: BackComponent},
  {path: '404', component: Error404Component},
  {path: '',redirectTo:'timeline', pathMatch:'full'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
