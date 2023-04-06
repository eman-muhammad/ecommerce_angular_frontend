import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductService } from './services/productService/product.service';
import { ShowProductComponent } from './Product/show-product/show-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenComponent } from './pages/category/men/men.component';

import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './pages/orders/orders.component';
import { WomanComponent } from './pages/category/woman/woman.component';
import { SearchPipe } from './pipes/search.pipe';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { LengthPipe } from './pipes/length.pipe';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ShowProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    MenComponent,

    OrdersComponent,

    WomanComponent,
    SearchPipe,
    LengthPipe,
    CheckoutComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    AppRoutingModule, Ng2SearchPipeModule, ReactiveFormsModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm,faXmark);
  }
}
