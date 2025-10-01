import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkdownEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ipo-investment-notebook');
}
