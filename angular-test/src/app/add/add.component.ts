import { ItemServiceService } from './../item-service.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../item';
import { v4 as uuidv4 } from 'uuid'; 
@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  newItem: string = ''; // 儲存輸入的內容
  //todoItem: Item = new Item();更改到25方法內進行實體化
  @Input() waitingItem!: Item[];
  @Output() itemAdded = new EventEmitter<Item[]>();

  constructor(private service: ItemServiceService) {}
  addItem() {
    if (this.newItem.trim()) {
      // 確保輸入框不是空的
      const todoItem: Item = new Item();//實體化改到這邊，解決代辦項目覆蓋。
      todoItem.id = uuidv4();//更改使用uuid
      todoItem.describe = this.newItem.trim();
      todoItem.status = '1';
      this.waitingItem = [...this.waitingItem,todoItem]; // 加入陣列
      this.itemAdded.emit(this.waitingItem); // 發送新項目到父元件
      //this.items.push(this.newItem); // 加入陣列
      this.newItem = ''; // 清空輸入框
      console.log(this.waitingItem);
    }
  }
}
