import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>My Angular App</h1>
    <a routerLink="/about">Go to About</a>
    <router-outlet></router-outlet>
  `
})

export class App {}

