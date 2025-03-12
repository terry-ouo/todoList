import { Item } from './../item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-wait',
  imports: [CommonModule, FormsModule],
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css'],
})
export class WaitComponent implements OnInit {
  title = '待辦項目';
  isEditing = false; // 控制是否進入編輯模式
  editIndex: number | null = null; // 用來紀錄當前正在編輯的項目索引

  constructor(private service: ItemServiceService) {}

  @Input() items!: Item[];
  @Output() itemsChange = new EventEmitter<Item[]>();//將陣列與父元件同步
  @Output() itemFinished = new EventEmitter<Item>();

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  /*delete(index: number) {
    this.items = this.items.splice(index, 1); // 刪除指定索引的項目
  }*/
  delete(item:Item){
    this.items = this.items.filter(data => data.id !== item.id);
    this.itemsChange.emit(this.items);
  }
  // 進入編輯模式
  enterEditMode(index: number, item: any) {
    console.log(item);
    this.isEditing = true;
    this.editIndex = index; // 記錄正在編輯的項目索引
  }

  // 當輸入框失去焦點時自動儲存
  onBlur() {
    this.isEditing = false;
    this.editIndex = null; // 退出編輯模式
  }
  trackByIndex(index: number,item:Item): string {
    return item.id; // 使用索引作為唯一標識符
  }

  addFinishedItem(item: Item) {
    this.itemFinished.emit(item); // 發送新項目到父元件
    // this.items.push(this.newItem); // 加入陣列
    this.items = this.items.filter(data =>data.id!==item.id);
    this.itemsChange.emit(this.items);
  }
}
