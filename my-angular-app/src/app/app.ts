import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Create } from './admin/Product/create/create';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Create],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'huy';
}