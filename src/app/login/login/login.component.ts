import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-page');
  }

  login() {
    this.router.navigate(['Dashboard']);
  }

}
