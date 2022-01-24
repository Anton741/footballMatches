
import React from 'react';

const ComandCard = ({comand}) => {
  const logoPath = `https://footballista.ru/api/img/logos/${comand.logo}-middle.png?logoId=${comand.logoId}`;
  return (
    <div className="card border-0">
      <img src={logoPath} className="card-img-top" alt="command's logo" />
      <div className="card-body">
        <h5 className="card-title">{comand.name}</h5>
      </div>
    </div>
  );
}
export default ComandCard;