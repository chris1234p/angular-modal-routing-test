import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { StateService } from 'services/state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ModalDirective) modal: ModalDirective;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly state: StateService,
  ) {}

  ngAfterViewInit(): void {
    this.modal.show();
    console.log('setting modal open to true');
    this.state.modalOpen = true;
  }

  hidden() {
    window.history.back();
    this.state.modalOpen = false;
  }

  ngOnDestroy(): void {
    if (this.modal) {
      if (this.modal.isShown) {
        this.modal.hide();
      }
    }
  }
}
