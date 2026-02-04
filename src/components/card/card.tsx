import React from 'react';
import './card.css'

type CardProps = {
  title: string;
  isReversed: boolean;
  pulse: boolean,
  onPulseEnd: Function,
  children: React.ReactElement
}

export default function Card ({ title, isReversed, pulse, onPulseEnd, children }: CardProps)  {
  let cardClass = "card w-100 "

  isReversed
  ? cardClass += ' card-reversed '
  : cardClass += ' card-default '

  if (pulse) cardClass += ' pulse '

  return (
    <div className={cardClass}>
      <h1>{ title }</h1>
      { children }
    </div>
  );
}