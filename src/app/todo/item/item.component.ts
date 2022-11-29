import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() public item!: Todo
  @Input() public delete!: (id: number) => void

  public field = new FormControl<string>(this.item?.todo)
  public completed = new FormControl<boolean>(Boolean(this.item?.completed))

  public isEditing = false

  constructor(
    private todo: TodoService,
  ) { }

  public changeIsEditing(): void {
    this.isEditing = !this.isEditing
  }

  public updateItem(e?: Event): void {
    if (!e) {
      this.changeIsEditing()
    }
    this.todo.update({
      todo: this.field.value as string,
      completed: this.completed.value,
    } as Todo,
      this.item.id).subscribe(
        () => null,
        (er) => {
          console.log(er)
        }
      )
  }

  public deleteItem(): void {
    this.todo.delete(this.item.id).subscribe(
      (res) => {
        if (res) {
          this.delete(this.item.id)
        }
      },
      (er) => console.log(er),
    )
  }

  public ngOnInit(): void { 
    this.field.setValue(this.item.todo)
    this.completed.setValue(this.item.completed)
    if (this.item.id === 0) {
      this.isEditing = true
    }
  }
}
