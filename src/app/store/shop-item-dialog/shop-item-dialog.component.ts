import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopItemModel } from '../shared/shop-item.model';

@Component({
  selector: 'app-shop-item-dialog',
  templateUrl: './shop-item-dialog.component.html',
  styleUrls: ['./shop-item-dialog.component.scss'],
})
export class ShopItemDialogComponent implements OnInit {
  @Input() public get visible() {
    return this._visible;
  }
  /**
   * Setter for the visible property
   */
  public set visible(visible: boolean) {
    this._visible = visible;
    this.visibleChange.next(this._visible);
  }
  @Input() selectedShopItem: ShopItemModel;
  /**
   * Emitter for the visible property
   */
  @Output() public visibleChange = new EventEmitter<boolean>();

  private _visible = false;
  constructor() {}

  ngOnInit() {}
}
