import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
         MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsSnapshotComponent } from './components/news-snapshot/news-snapshot';
import { PaginationComponent } from './components/pagination/pagination';

import { FromNowPipe } from './pipes/from-now';

@NgModule({
  declarations: [
    AppComponent,
    NewsSnapshotComponent,
    PaginationComponent,

    FromNowPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
