import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutHeaderComponent, LayoutFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-fpt-shop';
}
