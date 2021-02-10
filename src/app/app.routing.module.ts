import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalculatorComponent } from './calculator/calculator.component';
import { DiceComponent } from './dice/dice.component';
export const Approutes: Routes = [
  {
    path: "",
    redirectTo: "calculator",
    pathMatch: "full"
  },
  {
    path: "calculator",
    component: CalculatorComponent,
  },
  
  {
    path: "dice",
    component: DiceComponent,
  }
];
