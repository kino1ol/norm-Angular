import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/authService.service';
import { TodoService } from './services/todo.service';
import { Todo, Todos } from './types/todo';

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
    private ref: ChangeDetectorRef,
    private router: Router,
    private user: AuthService
  ) { }

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
      userId: Number(this.user.userID),
    } as Todo).subscribe(
      () => {
        this.list.todos.unshift({
          id: 0,
          todo: '',
          completed: false,
          userId: Number(this.user.userID),
        })
        this.ref.markForCheck()
      },
      er => {
        console.log(er)
      }
    )
  }

  public ngOnInit(): void {
    this.user.isAuth().subscribe(() => {
      this.user.isLogined = true
    },
      () => {
        this.user.isLogined = false
      })
    if (this.user.isLogined) {
      this.todo.get().subscribe((res) => {
        this.list = res
        this.ref.markForCheck()
      })
    } else {
      this.router.navigate(['sign/in'])
    }
  }
}
