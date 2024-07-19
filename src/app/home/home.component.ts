import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  game_featured: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('svg_el') svg_el!: ElementRef;
  game_dropdown: boolean = false;
  game_price: boolean = false;
  game_item: boolean = false;

  game_options: any = {
    game_type: 'Pick an Option !',
    game_price_opt: 'All',
    game_item_opt: 'All',
    game_featured_opt: 'Featured',
  };

  constructor(private render2: Renderer2) {}

  ngOnInit(): void {}

  dropDownClk() {
    let hasClass = this.dropdown.nativeElement.classList.contains('active');
    if (!hasClass) {
      this.render2.addClass(this.dropdown.nativeElement, 'active');
      this.render2.addClass(this.svg_el.nativeElement, 'rotated');
    } else {
      this.render2.removeClass(this.dropdown.nativeElement, 'active');
      this.render2.removeClass(this.svg_el.nativeElement, 'rotated');
    }
  }

  toggleBar() {
    let headerMenuSidebar = document.getElementById('headerMenu');
    let dropdown = document.getElementById("dropdown");
    dropdown?.classList.remove('active')
    headerMenuSidebar!.classList.add('header-menu-show');
  }

  closeSidebar() {
    let headerMenuSidebar = document.getElementById('headerMenu');
    headerMenuSidebar!.classList.remove('header-menu-show');
  }

  handlerOpen(type: string, value: string) {
    var childElement = document.querySelectorAll('#dropdown_item');
    let arrowEl = document.getElementById('arrow_dr');
    childElement.forEach((el) => {
      let element = el!.classList.contains('active');
      element && (this.game_options[type] = value);
      element && el?.classList.remove('active');
      element && arrowEl?.classList.remove('rotated');
    });
  }
}
