import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  isModalOpen = false;

  onToggleList() {
    this.isModalOpen = !this.isModalOpen;
    this.modalService.changeIsListOpen(this.isModalOpen);
  }
}
