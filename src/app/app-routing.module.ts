
import { ShowpageComponent } from './showpage/showpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CamerasComponent } from './cameras/cameras.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  { path:"home/Mobiles",
  component:MobilesComponent
  },
  { path:"home/Mobiles/:brand",
  component:MobilesComponent
   },
   { path:"home/Laptops",
   component:LaptopsComponent
   },
   { path:"home/Laptops/:brand",
   component:LaptopsComponent
    },
    { path:"home/Cameras",
    component:CamerasComponent
    },
    { path:"home/Cameras/:brand",
    component:CamerasComponent
    },
  { path:"home/Mobiles/:brand/:id",
      component:ShowpageComponent
    },
   { path:"home/Laptops/:brand/:id",
    component:ShowpageComponent
  },
  { path:"home/Cameras/:brand/:id",
  component:ShowpageComponent
  },
  {
    path:"home/checkout",
    component:CartComponent
  },
 
  {
    path:"checkout",
    component:CartComponent
  },
  {
    path:"",
     redirectTo:"/home",pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
