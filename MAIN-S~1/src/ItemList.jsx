import { items } from "./data/itemData";

const ItemList = () => {
  return (
    <>
      {items.map((item, index) => (
        <div key={item.name + index} className='item'>
          <div className="item-image">
            <a href={item.link}>
              <img src={item.image} alt={item.name} />
            </a>
          </div>
          <p className="item-name">
            <a href={item.link}><strong>{item.name}</strong></a>
          </p>
          <p className="item-price">{item.price.toLocaleString()}원</p>
          <p className="item-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="rating-number"> ({item.rate})</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default ItemList;
