import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../models/Supplier';

@Component({
  selector: 'app-supplier-list-card',
  templateUrl: './supplier-list-card.component.html',
  styleUrls: ['./supplier-list-card.component.scss']
})
export class SupplierListCardComponent implements OnInit {
  
  @Input()
  items: Supplier[] = [];
  constructor() { }

  ngOnInit() {
  }

}
