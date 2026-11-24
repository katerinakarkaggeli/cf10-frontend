import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  // Step 1 One way Binding
  name = 'Katerina'

  user = {
    firstname: "Bob",
    lastname: "Dylan",
    email: "bob.dylan@aueb.gr"
  }
}
