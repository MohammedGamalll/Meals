import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { after } from 'node:test';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit {

  @ViewChild('btn') btn!:ElementRef;
  @ViewChild('sidebar') sidebar!:ElementRef;

  constructor() { }

  ngAfterViewInit(){
    this.toggleSidebar();
  }

  toggleSidebar() {
    if(screen.width <= 768) {
      this.sidebar.nativeElement.classList.remove('d-none');
  }
}

  closeSidebar() {
    this.sidebar.nativeElement.classList.add('d-none');
  }

}
