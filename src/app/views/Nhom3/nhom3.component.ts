import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nhom3',
  templateUrl: './nhom3.component.html',
  styleUrls: ['./nhom3.component.scss']
})
export class Nhom3Component implements OnInit {
  data: any = {
	title: 'Nhom 3',
	items: [
		{
			ma: 1,
			hodem: 'Pham',
			ten: 'Duy',
			ngaysinh:1997,
			diemtongket:7,
			xeploai:'kha'
		},
		{
			ma: 2,
			hodem: 'Trung',
			ten: 'Hau',
			ngaysinh:1998,
			diemtongket:7,
			xeploai:'kha'
		},
		{
			
			ma: 3,
			hodem: 'Gia',
			ten: 'Bao',
			ngaysinh:1997,
			diemtongket:7,
			xeploai:'kha'
		}
	]
};
  constructor() {
  
  }

  ngOnInit() {
  }


}
