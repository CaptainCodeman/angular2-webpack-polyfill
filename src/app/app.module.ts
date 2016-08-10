import {NgModule}              from '@angular/core';
import {BrowserModule}         from '@angular/platform-browser';
import {JsonpModule}           from '@angular/http';
import {DeprecatedFormsModule} from '@angular/common';
import {AppComponent}          from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, JsonpModule, DeprecatedFormsModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
