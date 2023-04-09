import { Component } from '@angular/core';
import { Deals } from '../../models/deals';
import { DealsService } from '../../services/deals.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
})
export class PipelineComponent {
  dealsList: Deals[] = [];
  searchText: string = '';
  FocusList: Deals[] = [];
  contList: Deals[] = [];
  OfferList: Deals[] = [];
  ReadyList: Deals[] = [];
  potenList: Deals[] = [];
  constructor(private dealService: DealsService, private router: Router) {}
  getAllDeals() {
    this.dealService.getAllDeals().subscribe((data) => {
      this.dealsList = data;
      this.FocusList = data.filter((deal) => {
        return deal.status == 'Focus';
      });

      this.contList = data.filter((deal) => {
        return deal.status == 'Contact Made';
      });

      this.OfferList = data.filter((deal) => {
        return deal.status == 'Offer Sent';
      });

      this.ReadyList = data.filter((deal) => {
        return deal.status == 'Getting Ready';
      });

      this.potenList = data.filter((deal) => {
        return deal.status == 'Potential Value';
      });
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event.previousContainer.id);
    console.log('FROM' + event.previousContainer.id);
    console.log('TO' + event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit(): void {
    this.getAllDeals();
  }
}
