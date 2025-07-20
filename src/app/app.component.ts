import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { GetInvolvedComponent } from "./get-involved/get-involved.component";

@Component({
  selector: 'app-root',
  imports: [CompanyComponent, GetInvolvedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'school-project';
}
