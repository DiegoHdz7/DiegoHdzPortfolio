import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme='light-theme';

  constructor() { 
    this.setTheme(this.activeTheme)
  }

  setTheme(theme: string): void {
    this.activeTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.activeTheme);
  }

  toggleTheme(): void {
    this.setTheme(this.activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
}
