import { RiAddLine, RiSubtractLine, RiDeleteBinLine } from "react-icons/ri";
import { Product } from "../../../contexts/CartContext";
import { formatPrice } from "../../../utils/formatPrice";

import { Container } from "./styles";

interface CartItemProps {
  product: Product;
  onAddClick: (id: string) => void;
  onDecrementClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
}

export function CartItem({
  product,
  onAddClick,
  onRemoveClick,
  onDecrementClick,
}: CartItemProps) {
  const total = formatPrice(product.price * product.quantity || 0);

  return (
    <Container>
      <img src={product.image_url} alt={product.title} />
      <div className="item-info">
        <h3>{product.title}</h3>
        <span>
          Quantidade: <b>{product.quantity || 0}</b>
        </span>
        <p className="price">
          <b>{total}</b>
        </p>
      </div>
      <div className="item-actions">
        <button type="button" onClick={() => onAddClick(product.id)}>
          <RiAddLine size={20} />
        </button>
        <button type="button" onClick={() => onDecrementClick(product.id)}>
          <RiSubtractLine size={20} />
        </button>
      </div>
      <button
        className="remove-button"
        type="button"
        onClick={() => onRemoveClick(product.id)}
      >
        <RiDeleteBinLine size={20} />
      </button>
    </Container>
  );
}
