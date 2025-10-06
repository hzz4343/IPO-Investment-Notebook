import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.html',
  styleUrls: ['./markdown-editor.css'],
  imports: [FormsModule, LMarkdownEditorModule],
  standalone: true
})
export class MarkdownEditorComponent {
  content = `# IPO Investment Notebook

## Company Analysis

### Basic Information
- **Company Name**: 
- **Industry**: 
- **IPO Date**: 

### Financial Metrics
- **Revenue**: 
- **Growth Rate**: 
- **Profit Margin**: 

### Investment Thesis
Write your investment reasoning here...

### Risk Factors
- Risk 1
- Risk 2
- Risk 3

### Conclusion
Your final assessment...`;
}
