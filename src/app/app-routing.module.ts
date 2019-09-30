import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CounterComponent } from "./pages/counter/counter.component";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: '',
    redirectTo: '/counter',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
