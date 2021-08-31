import { RiCheckboxCircleLine, RiCloseLine } from "react-icons/ri";
import ReactModal from "react-modal";
import { useTheme } from "styled-components";
import { ModalBody } from "./styles";

interface CartProps {
  toggleModalVisible: () => void;
  isSuccessVisible: boolean;
}

export function SuccessModal({
  toggleModalVisible,
  isSuccessVisible,
}: CartProps) {
  const theme = useTheme();

  return (
    <ReactModal
      isOpen={isSuccessVisible}
      onRequestClose={toggleModalVisible}
      overlayClassName="success-modal-overlay"
      className="success-modal-content"
      closeTimeoutMS={200}
    >
      <button
        type="button"
        onClick={toggleModalVisible}
        className="cart-modal-close"
      >
        <RiCloseLine size={24} />
      </button>
      <ModalBody>
        <RiCheckboxCircleLine size={124} color={theme.color.success} />
        <h1>Uhull! Compra finalizada!</h1>
        <p>
          Obrigado por comprar com a gente! Seus produtos serão embalados e logo
          estarão com você!
        </p>

        <button type="button" onClick={toggleModalVisible}>
          Legal!
        </button>
      </ModalBody>
    </ReactModal>
  );
}
