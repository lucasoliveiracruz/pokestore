import React, { createContext, useContext, useState } from "react";
import { SuccessModal } from "../components/SuccessModal";

interface ModalContext {
  toggleModal(): void;
}

const ModalContext = createContext<ModalContext>({} as ModalContext);

export function ModalProvider({ children }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((visible) => !visible);
  };

  return (
    <ModalContext.Provider
      value={{
        toggleModal,
      }}
    >
      {children}
      <SuccessModal
        isSuccessVisible={modalVisible}
        toggleModalVisible={toggleModal}
      />
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContext {
  return useContext(ModalContext);
}
