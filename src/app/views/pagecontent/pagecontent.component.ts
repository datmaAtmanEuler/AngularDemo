import { Component, OnInit, ViewChild } from '@angular/core';  
import { ContentService } from "../../services/content.service";   
import { UtilsService } from "../../services/utils.service";   
import { Router } from '@angular/router';  
@Component({  
  selector: 'app-pagecontent',  
  templateUrl: './pagecontent.component.html',  
  styleUrls: ['./pagecontent.component.scss']  
})  
export class PagecontentComponent implements OnInit {  
  res: any;
  contentId: number;
  @ViewChild('confirmDeleteContent', {static: false}) confirmDeleteContent: any;

  constructor(private contentservice:ContentService,private router: Router, public utilsService: UtilsService) { }  
  
  ngOnInit() {  
   this.Getcontent();
  }  
  Getcontent()  
  {  
    this.contentservice.Getcontent().subscribe((data:any)=>{  
      if (data.length > 0) {
     	 this.res = data; 
      } else {
	 this.res = [];
      }
    })  
  }  
  GetcontentById(id:number)  
  {  
    this.router.navigate(['/detailspost'], { queryParams: { Id: id } });  
  } 
  DeleteContentById(id:number)  
  {  
	this.contentId = id;
	this.confirmDeleteContent.show();
  }  
  deleteContent() {
    const _this = this;
    this.contentservice.DeleteContentById(_this.contentId).subscribe(() => {
	_this.Getcontent();
    });
  }
}  