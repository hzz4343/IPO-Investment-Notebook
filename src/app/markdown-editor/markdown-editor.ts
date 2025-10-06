import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.html',
  styleUrls: ['./markdown-editor.css'],
  imports: [FormsModule, LMarkdownEditorModule, MarkdownModule],
  standalone: true
})
export class MarkdownEditorComponent {
  isPreviewOnly = false;
  
  markdownContent = 'start the note...';

  togglePreview() {
    this.isPreviewOnly = !this.isPreviewOnly;
  }
}
