import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { ContentService } from '../../services/content.service';  
import { Content } from '../../models/content';  
import * as ClassicEditor from '../../../assets/js/ck-editor-math-type/ckeditor.js';
  
@Component({  
  selector: 'app-detailspost',  
  templateUrl: './detailspost.component.html',  
  styleUrls: ['./detailspost.component.scss']  
})  
export class DetailspostComponent implements OnInit {  
  res: Content = new Content();
  Editor = ClassicEditor;

  constructor( private route: ActivatedRoute,private contentservice:ContentService, private router: Router) { }  
  
  ngOnInit() {  
    let Id = this.route.snapshot.queryParams["Id"];
    this.GetcontentById(Id);  
  }  
  GetcontentById(Id:number)  
  {  
     this.contentservice.GetcontentById(Id).subscribe((data: Content)=>{  
       this.res = data;  
    });  
  }
  ReturnList() {
      this.router.navigate(['/pagecontent']); 
  }
  editPost() {
      let Id = this.route.snapshot.queryParams["Id"];
      this.router.navigate(['/texteditor'], { queryParams: { Id: Id } });  
  }
}  