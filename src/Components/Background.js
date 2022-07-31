import { Image } from 'react-bootstrap';

export default function Background() {
  return (
    <div id="bg-component">
      <Image className="top-left" src="img/top-left.svg"></Image>
      <Image className="top-middle" src="img/top-middle.svg"></Image>
      <Image className="top-right" src="img/top-right.svg"></Image>
      <Image className="bottom-left" src="img/bottom-left.svg"></Image>
      <Image className="bottom-right" src="img/bottom-right.svg"></Image>
    </div>
  )
}