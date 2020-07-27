import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent<T> implements OnInit {

  @Input() miniTableHeight = 0;
  @Input() items: object[] = [];
  @Input() columns: object[] = [];
  @Input() limit?: number;
  @Input() detailTemplate: TemplateRef<any>;

  @ViewChild('myTable') table: any;

  constructor() { }

  ngOnInit() {
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

}
