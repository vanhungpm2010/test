import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-cmp',
    moduleId: module.id,
    templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit{
  file: File;

onFileAdd(file: File) {
this.file = file;
}

onFileRemove() {
this.file = null;
}
    ngOnInit(){
    }
}
