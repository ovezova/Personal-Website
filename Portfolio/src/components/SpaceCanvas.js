import { Pt, Group, Line, Const } from 'pts';
import { PtsCanvas } from 'react-pts-canvas';

export class SpaceCanvas extends PtsCanvas {
  constructor() {
    super();
    this.pairs = [];
  }

  componentDidUpdate() {
    if (this.props.pause) {
      this.space.pause();
    } else {
      this.space.resume();
    }
  }

  // Override PtsCanvas' start function
  start(space, bound) {
    let r = space.size.minValue().value / 3;

    // create 200 lines
    for (let i = 0; i < 200; i++) {
      let ln = new Group(Pt.make(2, r, true), Pt.make(2, -r, true));
      ln.moveBy(this.space.center).rotate2D(
        (i * Math.PI) / 200,
        this.space.center
      );
      this.pairs.push(ln);
    }
  }

  // Override PtsCanvas' resize function
  resize() {
    this.space.pause();
    this.space.resume();
  }

  // Override PtsCanvas' animate function
  animate(time, ftime) {
    for (let i = 0, len = this.pairs.length; i < len; i++) {
      // rotate each line by 0.1 degree and check collinearity with pointer
      let ln = this.pairs[i];
      ln.rotate2D(Const.one_degree / 20, this.space.center);

      let collinear = Line.collinear(ln[0], ln[1], this.space.pointer, 0.1);

      if (collinear) {
        // this.form.stroke('grey').line(ln);
      } else {
        // if not collinear, color the line based on whether the pointer is on left or right side
        let side = Line.sideOfPt2D(ln, this.space.pointer);
        this.form
          .stroke(side < 0 ? 'rgba(255,0,127,.1)' : 'rgba(255,105,180,.1)')
          .line(ln);
      }
      this.form.fillOnly('rgba(255,193,204,0.8)').points(ln, 0.5);
    }

    // this.form.fillOnly('#f03').point(this.space.pointer, 3, 'circle');
  }
}
