import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { FiltersComponent } from './filters/filters.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RelevanceChartComponent } from './relevance-chart/relevance-chart.component';
import { CountryPieChartComponent } from './country-pie-chart/country-pie-chart.component';
import { RegionLineChartComponent } from './region-line-chart/region-line-chart.component';
import { CityChartComponent } from './city-chart/city-chart.component';
import { TopicsBarChartComponent } from './topics-bar-chart/topics-bar-chart.component';
import { FilterdetailsComponent } from './filterdetails/filterdetails.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { SidenavComponent } from './side-nav/side-nav.component';
import { IntensityChartComponent } from './intensity-chart/intensity-chart.component';
import { LikelihoodChartComponent } from './likelihood-chart/likelihood-chart.component';
import { TopicChartComponent } from './topic-chart/topic-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    FiltersComponent,
    DataTableComponent, 
    FooterComponent,
    BarChartComponent,
    LineChartComponent,
    RelevanceChartComponent,
    CountryPieChartComponent,
    RegionLineChartComponent,
    CityChartComponent,
    TopicsBarChartComponent,
    FilterdetailsComponent,
    FilterOptionsComponent,
    HeaderComponent,
    SidenavComponent,
    IntensityChartComponent,
    LikelihoodChartComponent,
    TopicChartComponent, 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
