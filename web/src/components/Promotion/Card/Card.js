import React from "react";
import {Link} from 'react-router-dom';
import "./Card.css";

const PromotionCard = ({ promotion, onClickComments }) => {
  return (
    <div className="promotion-card">
      <img src={promotion.imageUrl} className="promotion-card__image" alt={promotion.title} />
      <div className="promotion-card__info">
        <h1 className="promotion-card__title">{promotion.title}</h1>
        <span className="promotion-card__price">R$ {promotion.price}</span>
        <footer className="promotion-card__footer">
          {promotion.comments.length > 0 && (
            <div className="promotion-card__comment">
              "{promotion.comments[0].comment}"
            </div>
          )}

          <button className="promotion-card__comments-count" onClick={onClickComments}>
            {promotion.comments.length}{" "}
            {promotion.comments.length > 1 ? "Comentários" : "Comentário"}
          </button>
          <a
            href={promotion.url}
            target="_blank"
            rel="noreferrer"
            className="promotion-card__link"
          >
            ir para o site
          </a>
          <Link to={`/edit/${promotion.id}`} className="promotion-card__edit-button" >Editar</Link>
        </footer>
      </div>
    </div>
  );
};

export default PromotionCard;
