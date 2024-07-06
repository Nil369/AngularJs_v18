import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetAPIComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostAPIComponent } from './components/apiIntegration/post-api/post-api.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';

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
    {
        path: 'template-form',
        component: TemplateComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveComponent
    },
    {
        path: 'api-get',
        component: GetAPIComponent
    },
    {
        path: 'api-post',
        component: PostAPIComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
];
