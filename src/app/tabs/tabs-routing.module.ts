import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      
      {
        path: 'bill',
        loadChildren: () => import('../bill/bill.module').then( m => m.BillPageModule)
      },
      {
        path: 'behavior',
        loadChildren: () => import('../behavior/behavior.module').then( m => m.BehaviorPageModule)
      },
      {
        path: 'cost',
        loadChildren: () => import('../cost/cost.module').then( m => m.CostPageModule)
      },
      {
        path: 'revenue',
        loadChildren: () => import('../revenue/revenue.module').then( m => m.RevenuePageModule)
      },
     
      {
        path: 'expend',
        loadChildren: () => import('../expend/expend.module').then( m => m.ExpendPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
