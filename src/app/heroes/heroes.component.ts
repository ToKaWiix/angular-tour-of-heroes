import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,  // Si tu utilises Angular en mode standalone, ajoute ça
  imports: [CommonModule, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}  // Injection du service ici

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}