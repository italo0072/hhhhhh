import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./aads.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  currentUser: User;
  searchQuery: string = ''; // Campo de búsqueda

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/login');
  }

  searchUser() {
    if (this.searchQuery) {
      // Redirigir a la página de perfil del usuario buscado
      this.router.navigateByUrl('/profile/' + this.searchQuery);
    }
  }
}
