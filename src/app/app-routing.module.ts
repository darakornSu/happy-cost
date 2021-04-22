import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'expend',
    loadChildren: () => import('./expend/expend.module').then( m => m.ExpendPageModule)
  },
  {
    path: 'revenue',
    loadChildren: () => import('./revenue/revenue.module').then( m => m.RevenuePageModule)
  },
  {
    path: 'cost',
    loadChildren: () => import('./cost/cost.module').then( m => m.CostPageModule)
  },
  {
    path: 'behavior',
    loadChildren: () => import('./behavior/behavior.module').then( m => m.BehaviorPageModule)
  },
  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then( m => m.BillPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'savings',
    loadChildren: () => import('./savings/savings.module').then( m => m.SavingsPageModule)
  },
  {
    path: 'sum-bill',
    loadChildren: () => import('./sum-bill/sum-bill.module').then( m => m.SumBillPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./board/board.module').then( m => m.BoardPageModule)
  },
  {
    path: 'showbill',
    loadChildren: () => import('./showbill/showbill.module').then( m => m.ShowbillPageModule)
  },
  {
    path: 'showrevenue',
    loadChildren: () => import('./showrevenue/showrevenue.module').then( m => m.ShowrevenuePageModule)
  },
  {
    path: 'showexpend',
    loadChildren: () => import('./showexpend/showexpend.module').then( m => m.ShowexpendPageModule)
  },
  {
    path: 'sum-activity',
    loadChildren: () => import('./sum-activity/sum-activity.module').then( m => m.SumActivityPageModule)
  },
  {
    path: 'showactivity',
    loadChildren: () => import('./showactivity/showactivity.module').then( m => m.ShowactivityPageModule)
  },
  {
    path: 'editbill',
    loadChildren: () => import('./editbill/editbill.module').then( m => m.EditbillPageModule)
  },
  {
    path: 'editactivity',
    loadChildren: () => import('./editactivity/editactivity.module').then( m => m.EditactivityPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'showbehavior',
    loadChildren: () => import('./showbehavior/showbehavior.module').then( m => m.ShowbehaviorPageModule)
  },
];
@NgModule({
  imports: [
    
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
