import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-business-unit-note-chart',
  templateUrl: './business-unit-note-chart.component.html',
  styleUrls: ['./business-unit-note-chart.component.scss']
})
export class BusinessUnitNoteChartComponent implements OnInit {

  elem;

  public treeData = [4, 8, 15, 16, 23];

  private i = 0;

  // ************** Generate the tree diagram	 *****************
  public margin = { top: 40, right: 120, bottom: 20, left: 120 };

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    //get reference to element
    this.elem = this.viewContainer.element.nativeElement;

    // var ref = d3.select(this.elem).selectAll("circle").data([32, 57, 112, 293]);
    var svg = d3.select(this.elem).select("svg");

    svg.selectAll("circle")
      .style("fill", "steelblue")
      .data([32, 57, 112, 293])
      .enter().append("circle")
      .style("fill", "steelblue")
      .attr("cy", 60)
      .attr("cx", function (d, i) { return i * 100 + 30; })
      .attr("r", function (d) { return Math.sqrt(d); });

  }

}
