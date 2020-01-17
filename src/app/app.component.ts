import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(emailTest: EmailService) {
    emailTest.getLogger();
  }
  title = 'my-ng-app-Melamud';
}
