import React from 'react';
import './card.css'

type CardProps = {
  title: string;
  isReversed: boolean;
  children: React.ReactElement
}

export default function Card ({ title, isReversed, children }: CardProps)  {
  let cardClass = "card w-100 "
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