import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cats-frontend';
}
