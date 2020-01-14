import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nhom3',
  templateUrl: './nhom3.component.html',
  styleUrls: ['./nhom3.component.scss']
})
export class Nhom3Component implements OnInit {
  listTilte: string = 'Danh sách học sinh';
  data: any = {
	title: 'Nhóm 3',
	items: [
		{
			ma: 1,
			hodem: 'Phạm',
			ten: 'Duy',
			ngaysinh:1997,
			diemtongket:9,
			xeploai:'Giỏi'
		},
		{
			ma: 2,
			hodem: 'Trung',
			ten: 'Hậu',
			ngaysinh:1998,
			diemtongket:7,
			xeploai:'Khá'
		},
		{
			
			ma: 3,
			hodem: 'Gia',
			ten: 'Bảo',
			ngaysinh:1997,
			diemtongket:7,
			xeploai:'Khá'
		},
		{
			
			ma: 4,
			hodem: 'Trần Ngọc',
			ten: 'Hoa',
			ngaysinh:1998,
			diemtongket:5.5,
			xeploai:'Trung Bình'
		},
		{
			
			ma: 5,
			hodem: 'Ông Văn',
			ten: 'Vấn',
			ngaysinh:1997,
			diemtongket:6.3,
			xeploai:'Trung Bình'
		},
		{
			
			ma: 6,
			hodem: 'Thoại Y',
			ten: 'Ngân',
			ngaysinh:1998,
			diemtongket:6.4,
			xeploai:'Trung Bình'
		},
		{
			
			ma: 7,
			hodem: 'Trần Ngọc',
			ten: 'Ánh',
			ngaysinh:1998,
			diemtongket:3.75,
			xeploai:'Yếu'
		},
		{
			
			ma: 8,
			hodem: 'Ngu Như',
			ten: 'Thú',
			ngaysinh:1998,
			diemtongket:1.5,
			xeploai:'Kém'
		}
	]
};
  constructor() {
  
  }

  ngOnInit() {
  }

  xepLoaiCSS(loai: string): string {
	switch(loai.toLowerCase()) {
		case 'giỏi': return 'gioi';
		case 'khá': return 'kha';
		case 'trung bình': return 'trungbinh';
		case 'yếu': return 'yeu';
	}
	return 'kem';
  }
  
  soHocSinhDatDanhHieu(loai: number): number {
     let studentFilter: any[] = [];
     const _this = this;
     switch(loai) {
		case 1: {
			studentFilter = _this.data.items.filter(student => student.xeploai.toLowerCase() == 'giỏi');
			break;
		}
		case 2: {
			studentFilter = _this.data.items.filter(student => student.xeploai.toLowerCase() == 'khá');
			break;
		}
		case 3: {
			studentFilter = _this.data.items.filter(student => student.xeploai.toLowerCase() == 'trung bình');
			break;
		}
		case 4: {
			studentFilter = _this.data.items.filter(student => student.xeploai == 'yếu');
			break;
		}
		default: {
			studentFilter = _this.data.items.filter(student => student.xeploai.toLowerCase() == 'kém');
			break;
		}
	}
	return studentFilter.length;
  }

public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [this.soHocSinhDatDanhHieu(1), this.soHocSinhDatDanhHieu(2), this.soHocSinhDatDanhHieu(3), this.soHocSinhDatDanhHieu(4), this.soHocSinhDatDanhHieu(5)], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Giỏi', 'Khá', 'Trung bình', 'Yếu', 'Kém'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'green',
        'blue',
        'orange',
        '#800600',
        '#EF3E36'
      ],
      borderColor: [
        'green',
        'blue',
        'orange',
        '#800600',
        '#EF3E36'
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
