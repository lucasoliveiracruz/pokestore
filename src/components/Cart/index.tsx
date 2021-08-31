import { useMemo } from "react";
import { RiCloseLine, RiShoppingCartLine } from "react-icons/ri";
import ReactModal from "react-modal";
import { useCart } from "../../contexts/CartContext";
import { useModal } from "../../contexts/ModalContext";
import { formatPrice } from "../../utils/formatPrice";
import { CartItem } from "./CartItem";

import { ModalBody, ModalFooter } from "./styles";

interface CartProps {
  toggleCartVisible: () => void;
  isCartVisible: boolean;
}

export function Cart({ toggleCartVisible, isCartVisible }: CartProps) {
  const { cartProducts, ...cart } = useCart();
  const { toggleModal } = useModal();

  async function handleCheckout() {
    await cart.checkout();
    toggleCartVisible();
    toggleModal();
  }

  const cartTotal = useMemo(() => {
    const total = cartProducts.reduce(
      (acc, currentProduct) =>
        acc + currentProduct.price * currentProduct.quantity,
      0
    );

    return formatPrice(total);
  }, [cartProducts]);

  return (
    <ReactModal
      isOpen={isCartVisible}
      onRequestClose={toggleCartVisible}
      overlayClassName="cart-modal-overlay"
      className="cart-modal-content"
      closeTimeoutMS={200}
    >
      <button
        type="button"
        onClick={toggleCartVisible}
        className="cart-modal-close"
      >
        <RiCloseLine size={24} />
      </button>
      <ModalBody>
        <h2>Meu carrinho</h2>

        {cartProducts.length <= 0 && (
          <span>Nenhum item adicionado ao carrinho.</span>
        )}

        {cartProducts.map((product, index) => {
          const isFirstItem = index === 0;
          const isLastItem = cartProducts.length === index - 1;
          return (
            <CartItem
              key={product.id}
              product={product}
              onAddClick={cart.increment}
              onDecrementClick={cart.decrement}
              onRemoveClick={cart.removeFromCart}
              isFirstItem={isFirstItem}
              isLastItem={isLastItem}
            />
          );
        })}
      </ModalBody>
      {cartProducts.length > 0 && (
        <ModalFooter>
          <span>
            Total: <b>{cartTotal}</b>
          </span>
          <button type="button" className="icon" onClick={handleCheckout}>
            Finalizar pedido <RiShoppingCartLine />
          </button>
        </ModalFooter>
      )}
    </ReactModal>
  );
}
