import { ItemServiceService } from './../item-service.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  newItem: string = ''; // 儲存輸入的內容
  todoItem: Item = new Item();
  waitingItem: Item[] = [];
  constructor(private service: ItemServiceService) {}

  @Output() itemAdded = new EventEmitter<Item[]>();

  addItem() {
    if (this.newItem.trim()) {
      // 確保輸入框不是空的
      this.todoItem.describe = this.newItem.trim();
      this.todoItem.status = '1';
      this.waitingItem.push(this.todoItem); // 加入陣列
      this.itemAdded.emit(this.waitingItem); // 發送新項目到父元件
      //this.items.push(this.newItem); // 加入陣列
      this.newItem = ''; // 清空輸入框
    }
  }
}
