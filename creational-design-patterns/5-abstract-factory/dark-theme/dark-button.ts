import { Button } from "../interfaces/button.interface";

export class DarkButton implements Button {
  render(): void {
    console.log('Render Dark Button');
  }
}