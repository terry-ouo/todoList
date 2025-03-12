import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WaitComponent } from './wait/wait.component';
import { DoneComponent } from './done/done.component';
import { Item } from './item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddComponent, WaitComponent, DoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TO DO List';
  items: Item[] = [];
  itemFinished: Item[] = [];

  handleNewItem(item: Item[]) {
    this.items = item;
  }

  handleItemFinished(item: Item) {
    this.itemFinished = [...this.itemFinished,item];
  }
}
