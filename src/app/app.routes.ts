import { Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
    {
        path: 'task-form',
        component: TaskCreateComponent
    },

    {
        path: 'task-list',
        component: TaskListComponent
    }
];
