import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  userName: string;

  constructor(private router: Router) {
    this.userName = sessionStorage.getItem('userName');
  }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('FillingYear');
    this.router.navigate(['/login']);
  }


}
