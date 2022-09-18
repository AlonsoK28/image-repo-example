import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'image-repo-example';
  items: GalleryItem[] = [];
  imageData = data;

  constructor( private galleryRef: Gallery ){

  }

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }

  addThumbs(){
    const config: GalleryConfig = {
      thumb: true
    };

    const ref = this.galleryRef.ref('my-app-gallery');
    ref.setConfig(config);
  }

  removeThumbs(){
    const config: GalleryConfig = {
      thumb: false
    };

    const ref = this.galleryRef.ref('my-app-gallery');
    ref.setConfig(config);
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];