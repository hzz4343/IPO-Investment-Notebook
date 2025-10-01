import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// @ts-ignore
import Editor from '@toast-ui/editor';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.html',
  styleUrls: ['./markdown-editor.css']
})
export class MarkdownEditorComponent implements AfterViewInit {
  @ViewChild('editor') editorRef!: ElementRef;

  ngAfterViewInit() {
    new Editor({
      el: this.editorRef.nativeElement,
      height: '400px',
      initialEditType: 'markdown',
      previewStyle: 'vertical'
    });
  }
}
