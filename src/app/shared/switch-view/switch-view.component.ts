import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { leftToRightAnimation, rightToRightAnimation } from 'src/app/animations/enter-leave/enter-leave.animation';

@Component({
  selector: 'app-switch-view',
  templateUrl: './switch-view.component.html',
  styleUrls: ['./switch-view.component.scss'],
  animations: [leftToRightAnimation, rightToRightAnimation]
})
export class SwitchViewComponent implements OnInit {

  static readonly CARD_KEY = 'carViewTemplate';
  static readonly TABLE_KEY = 'tableViewTempalte';

  @Input() templates: Map<string, TemplateRef<any>>;
  @Input() defaultTemplateKey?: string;
  isCardViewVisible = true;

  constructor() { }

  ngOnInit() {
    if (this.defaultTemplateKey) {
      this.isCardViewVisible = SwitchViewComponent.CARD_KEY === this.defaultTemplateKey;
    }

  }

  getCardKey(): string {
   return SwitchViewComponent.CARD_KEY;
  }

  getTableKey(): string {
    return SwitchViewComponent.TABLE_KEY;
  }

}
