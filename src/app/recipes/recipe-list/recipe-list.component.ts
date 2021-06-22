import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_384/Vegetarian-Mapo-Tofu.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_384/Vegetarian-Mapo-Tofu.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
