import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'data-binding',
        component:DatabindingComponent
    },
    {
        path:'structural-dir',
        component: StructuralDirectiveComponent
    },
    {
        path: 'attributedirective',
        component: AttributeDirectiveComponent
    },
    {
        path: 'pipes',
        component: PipeComponent
    },
];
