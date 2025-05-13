import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatContentService } from '../../services/cat-content.service';
import { CommonModule } from '@angular/common';


interface CatContent {
  id: number;
  url: string;
  type: string;
}

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit, OnDestroy {
  catContents: CatContent[] = [];
  currentCat: CatContent | null = null;
  currentIndex: number = 0;
  intervalId: any;
  errorMessage: string = '';

  constructor(private catContentService: CatContentService) {}

  ngOnInit(): void {
    this.catContentService.getCatContent().subscribe(
      (data) => {
        this.catContents = data;
        this.startSlideshow();
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar os gatinhos 🐱';
        console.error(error);
      }
    );
  }

  startSlideshow(): void {
    if (this.catContents.length > 0) {
      this.currentCat = this.catContents[this.currentIndex];

      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.catContents.length;
        this.currentCat = this.catContents[this.currentIndex];
      }, 5000); // troca a cada 5 segundos
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
