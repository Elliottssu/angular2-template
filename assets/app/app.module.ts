import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule  }    from '@angular/http';

import { routing } 		    from './app.routing';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './website';
@NgModule({
	imports: [
		BrowserModule,
    FormsModule,
    HttpModule,
		routing
	],
    declarations: [
    	AppComponent,
    	HomeComponent
	],
  providers: [
      
  ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}