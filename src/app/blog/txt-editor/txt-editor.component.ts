import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
declare var tinymce: any;
@Component({
  selector: 'txt-editor',
  templateUrl: './txt-editor.component.html',
  styleUrls: ['./txt-editor.component.css']
})
export class TxtEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  editor;
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],   
      skin_url: 'assets/skins/lightgray',
      height: 200,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }



}
