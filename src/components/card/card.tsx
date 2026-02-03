import { FunctionComponent, PropsWithChildren } from 'react';
import './card.css'

type CardProps = {
  title: string;
  isReversed: boolean;
}

const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({ title, isReversed, children }) => {
  let cardClass = "card w-100"
  if (isReversed) {
    cardClass += ' card-reversed';
  } else {
    cardClass += ' card-default';
  }
  return (
    <div className={cardClass}>
      <h1>{ title }</h1>
      { children }
    </div>
  );
}

export default Card;