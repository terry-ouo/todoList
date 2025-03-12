import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { first } from 'rxjs';
@Component({
  selector: 'app-done',
  imports: [CommonModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css',
})
export class DoneComponent {
  title = '完成項目';
  @Input() itemFinished!:Item[];
  @Output() itemFinishedChange =  new EventEmitter<Item[]>();
  @Input() waitingItem!: Item[];
  @Output() itemAdded = new EventEmitter<Item[]>();

  delete(item: Item) {
    this.itemFinished = this.itemFinished.filter(data => data.id!==item.id);
    this.itemFinishedChange.emit(this.itemFinished);
  }
  undo(item: Item) {
    console.log(this.waitingItem);
    this.waitingItem = [...this.waitingItem,item];//更新陣列位置讓input偵測到變化
    this.itemAdded.emit(this.waitingItem);
    console.log(this.waitingItem);
    this.itemFinished= this.itemFinished.filter(data => data.id!==item.id);
    this.itemFinishedChange.emit(this.itemFinished);
  }
}
