import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../components/header-layout/header-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [HeaderLayoutComponent,RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
