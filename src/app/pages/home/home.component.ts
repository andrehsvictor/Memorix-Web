import { Component } from '@angular/core'; 
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    LogoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
