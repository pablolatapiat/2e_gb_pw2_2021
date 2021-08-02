import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { FooterComponent } from './components/footer/footer.component';
import { GratisComponent } from './components/gratis/gratis.component';
import { NovosPopularesComponent } from './components/novos-populares/novos-populares.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { TopoComponent } from './components/topo/topo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DestaquesComponent,
    FooterComponent,
    GratisComponent,
    NovosPopularesComponent,
    PromocoesComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
