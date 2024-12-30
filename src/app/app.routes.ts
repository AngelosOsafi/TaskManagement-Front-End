import { Routes } from '@angular/router';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'homepage',
        component: HomepageComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'task-form', component: TaskCreateComponent },
            { path: 'task-list', component: TaskListComponent }
        ]
    },
    { path: '**', redirectTo: 'home' }
];
