import { Component, OnInit , ViewContainerRef} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-business-unit-note-chart',
  templateUrl: './business-unit-note-chart.component.html',
  styleUrls: ['./business-unit-note-chart.component.scss']
})
export class BusinessUnitNoteChartComponent implements OnInit {

  elem;

  public treeData = [4, 8, 15,16,23];
  
  private i = 0;

  // ************** Generate the tree diagram	 *****************
  public margin = {top: 40, right: 120, bottom: 20, left: 120};
  public width = 960 - this.margin.right - this.margin.left;
  public height = 500 - this.margin.top - this.margin.bottom;

  public tree:any;
  public root:any;

  public diagonal :any;
  
  public svg : any;

  constructor(private viewContainer : ViewContainerRef) { 

     
  }

  ngOnInit() {
    this.elem = this.viewContainer.element.nativeElement;
    d3.select(this.elem).select("div").style("background-color", "yellow");

    d3.select(".chart")
    .selectAll("div")
      .data(this.treeData)
    .enter().append("div")
      .style("width", function(d) { return d * 10 + "px"; })
      .text(function(d) { return d; });
  }

}
