import { Component, OnInit } from '@angular/core';
import {Shop} from 'src/app/shop';

@Component({
  selector: 'app-shop-d',
  templateUrl: './shop-d.component.html',
  styleUrls: ['./shop-d.component.css']
})
export class ShopDComponent implements OnInit {
  shops:Shop[]=[
    {id:1,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROIndz-ylChaMlsawtC7C2kdZnf6at0UegxrsCcJzR7hozG4BSAG-IHS48HXdr4PjJ_JHux9G4gAdCqPOtIti7SMqcivEBPPkKkUPfjzg&usqp=CAU&ec=45725305',name:'Bic Pen',cost:25,quantity:'1 pen'},
    {id:2,image:'https://hips.hearstapps.com/elleit.h-cdn.co/assets/15/37/original/original-arte-blu-della-gomma-rossa-19440149-1-ita-it-a-cosa-serve-davvero-la-parte-blu-della-gomma-rossa-jpg.jpg',name:'Erasor',cost:30,quantity:'1 Item'},
    {id:3,image:'https://i.ebayimg.com/images/g/mXUAAOSw5dlaD9f6/s-l300.jpg',name:'Pencil',cost:10,quantity:'1 Item'},
    {id:4,image:'https://5.imimg.com/data5/KB/GS/MY-9085895/highlighter-pen-500x500.jpg',name:'Highlighter',cost:60,quantity:'1 Item'},
    {id:5,image:'https://i.pinimg.com/originals/b3/19/48/b31948e925ed542dd3f1af416167af2f.jpg',name:'Sticky Notes',cost:70,quantity:'1 Item'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
