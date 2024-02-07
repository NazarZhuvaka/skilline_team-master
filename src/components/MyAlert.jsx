import React, { useState, useEffect } from "react";
import { Logo } from "./Logo/Logo";

const MyAlert = ({ message, duration, onClose, showAlert }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (showAlert && duration) {
      const timeoutId = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [showAlert, duration, onClose]);

  return (
    showAlert && (
      <>
        <div className={`my-alert ${visible ? "visible" : ""}`}>
          <Logo myProp/>
          <div className="my-alert__txt">{message}</div>
        </div>
      </>
    )
  );
};

export default MyAlert;
