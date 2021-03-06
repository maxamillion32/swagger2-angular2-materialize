import {Component} from '@angular/core';
import {LeftMenu} from '../left-menu/left-menu';
import {ApiDocList} from '../list/list';
import {ApiDocDetail} from '../detail/detail';
import {RouteConfig,Route,ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector:'doc-main',
    directives:[LeftMenu,ROUTER_DIRECTIVES],
    template:`
    <div class="row">
        <left-menu></left-menu>
        <router-outlet></router-outlet>
    </div>`
})
@RouteConfig([
    new Route({path: '/:path', component: ApiDocList, name: 'ApiDocList', useAsDefault: true}),
    new Route({path: '/:path/detail/:operation', component: ApiDocDetail, name: 'ApiDocDetail',})
])
export class Main {}
