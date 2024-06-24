import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderHistoryComponent } from "./components/order-history/order-history.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OrderHistoryComponent,NgFor,NgIf]
})
export class AppComponent {
  title = 'restaurant-faves-frontend';
allOrders: any;
}
