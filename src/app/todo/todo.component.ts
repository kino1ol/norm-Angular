import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todos } from './types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  public list: Todos = {} as Todos

  constructor(
    public todo: TodoService,
    private ref: ChangeDetectorRef
  ) {}

  public deleteItem(id: number): void {
    this.list = {
      ...this.list,
      todos: this.list.todos.filter(el => el.id !== id)
    }
    this.ref.markForCheck()
  }

  public addItem(): void {
    this.todo.add({
      todo: '',
      completed: false,
      userId: Number(localStorage.getItem('id')),
    }).subscribe(
      () => {
        this.list.todos.unshift({
          id: 0,
          todo: '',
          completed: false,
          userId: Number(localStorage.getItem('id')),
        })
        this.ref.markForCheck()
      },
      er => {
        console.log(er)
      }
    )
  }

  public ngOnInit(): void {
    this.todo.get().subscribe((res) => {
      this.list = res
      this.ref.markForCheck()
    })
  }
}
