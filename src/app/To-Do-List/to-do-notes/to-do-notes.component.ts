import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-notes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-notes.component.html',
  styleUrl: './to-do-notes.component.scss'
})
export class ToDoNotesComponent {
  taskInput: string = '';
  tasks: string[] = [];
  isEditing: boolean = false;
  editIndex: number = -1;

  ngOnInit() {
    this.localSaveStorage();
  }

  addTask() {
    if (this.taskInput.trim()) {
      this.tasks.unshift(this.taskInput.trim());
      this.taskInput = '';
      this.localSave();
    }
  }

  editTask(index: number) {
    this.taskInput = this.tasks[index];
    this.isEditing = true;
    this.editIndex = index;
  }

  updateTask() {
    if (this.taskInput.trim() && this.editIndex !== -1) {
      this.tasks[this.editIndex] = this.taskInput.trim();
      this.taskInput = '';
      this.isEditing = false;
      this.editIndex = -1;
      this.localSave();

    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.isEditing && this.editIndex === index) {
      this.isEditing = false;
      this.editIndex = -1;
      this.taskInput = '';
    }
    this.localSave();
  }
  markDone(index: number) {
    
  
  }

  deleteAll() {
    this.tasks = [];
    this.isEditing = false;
    this.editIndex = -1;
    this.taskInput = '';
  }

  localSaveStorage(){
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }
  localSave() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); 
  
  }
  localClear() {
    localStorage.removeItem('tasks');
  }

}