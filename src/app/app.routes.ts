import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';

export const routes: Routes = [
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
];
