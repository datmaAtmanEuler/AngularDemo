import { Component, OnInit, ViewChild, AfterContentChecked, ChangeDetectorRef } from '@angular/core';    
import { ContentService } from '../../services/content.service';     
import { Content } from "../../models/content";
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '../../../assets/js/ck-editor-math-type/ckeditor.js';

@Component({    
  selector: 'app-text-editor',    
  templateUrl: './texteditor.component.html',    
  styleUrls: ['./texteditor.component.scss']    
})    
export class TextEditorComponent implements OnInit, AfterContentChecked {   
  contentdata: Content = new Content(); 
  @ViewChild('confirmDataSave', {static: false}) confirmDataSave: any;
  Id: number;
  Editor = ClassicEditor;

  constructor(private contentservice: ContentService, private route: ActivatedRoute, private router: Router, private cdRef: ChangeDetectorRef) {
  }    
  ngAfterContentChecked() {
     this.cdRef.detectChanges();
  }  

  ngOnInit() {    
     this.Getcontent(); 
  }    
  onSubmit()    
  {    
    const _this = this;
    this.contentservice.AddUpdateContent(this.contentdata).subscribe(() => {     
      _this.confirmDataSave.show();
      _this.router.navigate(['/pagecontent']);    
    })    
  }    
  Getcontent()    
  {    
    const _this = this;
    _this.Id = _this.route.snapshot.queryParams["Id"];
    if(_this.Id !== undefined && _this.Id !== 0) {
    	_this.contentservice.GetcontentById(_this.Id).subscribe((data:Content)=>{   
      	_this.contentdata = data;
    	});
    } else {
	_this.contentdata = new Content();
    }
  }    

  closeConfirmation() {
      this.confirmDataSave.hide();     
  }
}  