import { Component } from '@angular/core';
import { HeaderLayoutComponent } from "./header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = {
    name:"DemoThucTap.WEB",
    version:"1.0.0"
  };

  isDisable = false;
  contentImage = "Trường Tam";
}
