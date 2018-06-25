import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from "./mock-heroes";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroes = this._heroService.getHeroes();
  }

}
