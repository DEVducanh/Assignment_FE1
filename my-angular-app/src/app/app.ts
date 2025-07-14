import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./components/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
