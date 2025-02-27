import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
@Component({
  selector: 'app-done',
  imports: [CommonModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css',
})
export class DoneComponent {
  title = '完成項目';
  @Input() itemFinished: Item[] = [];
  @Output() itemAdded = new EventEmitter<Item>();

  delete(index: number) {
    this.itemFinished.splice(index, 1);
  }
  undo(index: number) {
    this.itemAdded.emit(this.itemFinished[index]);
    this.itemFinished.splice(index, 1);
  }
}
