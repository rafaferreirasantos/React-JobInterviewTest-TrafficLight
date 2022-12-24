import { Component } from 'react'
export interface LighProps {
  color: string;
  colorName: string;
  index: number;
  active: boolean;
  onClick: any;
}

export default class Light extends Component<LighProps> {
  render() {
    const { color, active, onClick } = this.props;
    return (
      <div
        className={`light ${color} ${active ? 'active' : ''}`}
        onClick={onClick}
        style={{ backgroundColor: color }}
      ></div>
    )
  }
}
