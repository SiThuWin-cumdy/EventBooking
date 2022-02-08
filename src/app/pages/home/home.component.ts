import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList = [
    {
      id: '001',
      image: 'https://hallbooking.net/admin/assets/img/hall/hall_cat20201016210250wedding.JPG',
      name: 'Wedding',
    },
    {
      id: '002',
      image: 'https://hallbooking.net/admin/assets/img/hall/hall_cat20201011181451Ceremony.jpg',
      name: 'Ceremonies',
    },
    {
      id: '003',
      image: 'https://hallbooking.net/admin/assets/img/hall/hall_cat20201016222935meeting.jpg',
      name: 'Conference',
    },
    {
      id: '004',
      image: 'https://hallbooking.net/admin/assets/img/hall/hall_cat20201016222935meeting.jpg',
      name: 'condolences',
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
