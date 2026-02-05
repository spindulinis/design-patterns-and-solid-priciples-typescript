import { Button } from "../interfaces/button.interface";

export class LightButton implements Button {
  render(): void {
    console.log('Render Light Button');
  }
}