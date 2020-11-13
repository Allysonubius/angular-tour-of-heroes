import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../_services/mock-heroes';
import { Hero } from '../../_services/hero';

@Component({
  selector: 'app-heroes-false',
  templateUrl: './heroes-false.component.html',
  styleUrls: ['./heroes-false.component.css']
})
export class HeroesFalseComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Allyson'
  };
  heroes = HEROES
  constructor() { }

  ngOnInit(): void {
  }

}
