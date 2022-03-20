import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MovieAppComponent } from './pages/movie-app/movie-app.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MovieAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
