import { NgModule } from '@angular/core';
import {Routes, PreloadAllModules, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {CreatePageComponent} from './admin/create-page/create-page.component';
import {AboutMePageComponent} from './shared/components/about-me-page/about-me-page.component';
import {PostComponent} from './shared/components/post/post.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'about-me', component: AboutMePageComponent},
    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
