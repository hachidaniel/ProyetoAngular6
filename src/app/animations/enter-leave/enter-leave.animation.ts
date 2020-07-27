import {trigger,  animate, transition, style, state } from '@angular/animations';

export const leftToRightAnimation =
  trigger('leftToRightAnimation', [
      transition(':enter', [
          style({transform: 'translateX(100%)'}),
          animate(200, style({transform: 'translateX(-100%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate(200, style({transform: 'translate(-100%)' }))
      ])
  ] );

  export const rightToRightAnimation =
  trigger('rightToRightAnimation', [
    transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(200, style({transform: 'translateX(-100%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translate(0)'}),
      animate(200, style({transform: 'translate(-100%)' }))
    ])
   ]);
