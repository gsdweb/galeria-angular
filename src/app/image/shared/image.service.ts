import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "Sala", "caption": "Sala nº1", "url": "assets/img/sala1.jpg"},
    {"id": 2, "category": "Sala", "caption": "Sala nº2", "url": "assets/img/sala2.jpg"},
    {"id": 3, "category": "Sala", "caption": "Sala nº3", "url": "assets/img/sala3.jpg"},
    {"id": 4, "category": "Sala", "caption": "Sala nº4", "url": "assets/img/sala4.jpg"},
    {"id": 5, "category": "Quarto", "caption": "Quarto nº1", "url": "assets/img/quarto1.jpg"},
    {"id": 6, "category": "Quarto", "caption": "Quarto nº2", "url": "assets/img/quarto2.jpg"},
    {"id": 7, "category": "Quarto", "caption": "Quarto nº3", "url": "assets/img/quarto3.jpg"},
    {"id": 8, "category": "Cozinha", "caption": "Cozinha nº1", "url": "assets/img/cozinha1.jpg"},
    {"id": 9, "category": "Cozinha", "caption": "Cozinha nº2", "url": "assets/img/cozinha2.jpg"},
    {"id": 10, "category": "Cozinha", "caption": "Cozinha nº3", "url": "assets/img/cozinha3.jpg"},
    {"id": 11, "category": "Cozinha", "caption": "Cozinha nº4", "url": "assets/img/cozinha4.jpg"},
    {"id": 12, "category": "Cozinha", "caption": "Cozinha nº5", "url": "assets/img/cozinha5.jpg"},
    {"id": 13, "category": "Jardim", "caption": "Jardim nº1", "url": "assets/img/jardim1.jpg"},
    {"id": 14, "category": "Jardim", "caption": "Jardim nº2", "url": "assets/img/jardim2.jpg"},
    {"id": 15, "category": "Jardim", "caption": "Jardim nº3", "url": "assets/img/jardim3.jpg"},
    {"id": 16, "category": "Banheiro", "caption": "Banheiro nº1", "url": "assets/img/banheiro1.jpg"},
    {"id": 17, "category": "Varanda", "caption": "Varanda nº1", "url": "assets/img/varanda1.jpg"},
    {"id": 18, "category": "Varanda", "caption": "Varanda nº2", "url": "assets/img/varanda2.jpg"}
]