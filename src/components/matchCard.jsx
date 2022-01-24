import ComandCard from "./comandCard"
import React from 'react';
import DataBlock from "./dataBlock";
import { dateTransform } from "./utils/DateTransform";

const MatchCard = ({card}) => {
  return (
    <div className="card my-4">
      <div className="m-2 fs-3 text-success"><strong>Tour N:</strong> {card.tourNumber}</div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="d-flex flex-row bd-highlight mb-3 flex-1">
          <div className="p-2 bd-highlight">
            <ComandCard comand={card.teamHome} />
          </div>
          <div className="p-2 bd-highlight align-self-center fs-2">
            <strong>
              {card.scoreFtHome} : {card.scoreFtAway}{' '}
            </strong>
          </div>
          <div className="p-2 bd-highlight">
            <ComandCard comand={card.teamAway} />
          </div>
        </div>
        <p className="fs-1 text-success text-center flex-shrink-1">
          {dateTransform(card.date)}
        </p>
      </div>
    </div>
  );
}

export default MatchCard;