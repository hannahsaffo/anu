import { Color3, StandardMaterial, TransformNode, Color4} from '@babylonjs/core';
import { Scene } from '@babylonjs/core/scene';
import { Selection } from '../../selection';
import { Chart2D } from './Chart2D';
import { Axis } from '../Axis/OLD/AxisNew';
import * as d3 from 'd3';

export class Bar2D extends Chart2D {
  makeScales(data: [], x: string, y: string): this {
    this.data = data;
    this.x = x;
    this.y = y;

    console.log([...new Set(this.data.map((d) => d[this.x]))]);
    let xScale = d3
      .scaleBand()
      .domain([...new Set(this.data.map((d) => d[this.x]))])
      .range([(-this.width + this.padding.left!) / 2, (this.width - this.padding.right!) / 2]);
    //.nice();

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.extent(data, (d) => d[this.y] as number)[1]] as [number, number])
      .range([0 + this.padding.bottom, this.height - this.padding.top]);
    //.nice();

    this.scales = { x: xScale, y: yScale };
    return this;
  }

  makeElements(color: Color3 | { key: string; scale: Function } = new Color3(0, 0, 0), alpha: number = 1): this {
    this.color = color;

    let xScale = d3
      .scaleBand()
      .domain([...new Set(this.data.map((d) => d[this.x]))])
      .range([(-this.width + this.padding.left!) / 2, (this.width - this.padding.right!) / 2]);

    let elements = this.cot
      .bind('plane', { height: 1 }, this.data)
      .scalingX(xScale.bandwidth())
      .scalingY((d) => this.scales.y(d[this.y]))
      .positionX((d) => this.scales.x(d[this.x]) + xScale.bandwidth() / 2)
      //.positionY(0)
      .positionY((d) => this.scales.y(d[this.y]) / 2 - (this.height - this.padding.bottom) / 2)
      .positionZ(0)
      .attr('renderingGroupId', 1);

    console.log(this.scales.y(1), this.scales.y(2), this.scales.y(1));

    if (color instanceof Color3) {
      elements
        .material(new StandardMaterial(this.name + 'material', this.scene))
        .attr('material.backFaceCulling', false)
        .diffuseColor(color)
        .attr('material.alpha', alpha);
    } else {
      elements
        .material((d, i) => new StandardMaterial(this.name + 'material', this.scene))
        .attr('material.backFaceCulling', false)
        .diffuseColor((d) => Color3.FromHexString(color.scale(d[color.key])))
        .attr('material.alpha', alpha);
    }

    this.elements = { points: elements };

    return this;
  }

  makeAxes(): this {
    //let xAxis: Axis = this.elements.points.pipeAxis('x', this.scales.x, {padding: {y: -(this.padding.bottom / 2)}});
    //let yAxis: Axis = this.elements.points.pipeAxis('y',this.scales.y, {padding: {x:  -(this.padding.bottom / 2)}});
    let xAxis: Axis = this.elements.points.pipeAxis('x', this.scales.x);
    let yAxis: Axis = this.elements.points.pipeAxis('y', this.scales.y);
    this.axes = { xAxis: xAxis, yAxis: yAxis };
    return this;
  }
}

export function createBar2D(
  name: string,
  scene: Scene,
  data: [],
  x: string,
  y: string,
  options: {
    height?: number;
    width?: number;
    padding?: { top?: number; bottom?: number; left?: number; right?: number };
    backgroundColor?: Color3;
    backgroundAlpha?: number;
    elementColor?: Color3 | { key: string; scale: Function };
    elementAlpha?: number;
  } = {},
) {
  const height = options.height || 10;
  const width = options.width || 10;
  const paddingTop = options.padding!.top || 0;
  const paddingBottom = options.padding!.bottom || 0;
  const paddingRight = options.padding!.right || 0;
  const paddingLeft = options.padding!.left || 0;
  const padding = { top: paddingTop, bottom: paddingBottom, left: paddingLeft, right: paddingRight };
  const backgroundColor = new Color3(258, 258, 258);
  const backgroundAlpha = options.backgroundAlpha || 1;

  let bar = new Bar2D(name, scene);
  bar.makeBackground(height, width, padding, backgroundColor, backgroundAlpha);
  bar.makeScales(data, x, y);
  bar.makeElements(options.elementColor, options.elementAlpha);
  bar.makeAxes();

  return bar;
}
