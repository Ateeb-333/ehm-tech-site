"use client";

import { useState, useCallback } from "react";
import { ToastProps, ToastType } from "@/components/Toast";

let toastId = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info", duration = 5000) => {
    const id = `toast-${++toastId}`;
    
    const newToast: ToastProps = {
      id,
      message,
      type,
      duration,
      onClose: (toastId: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== toastId));
      },
    };

    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const closeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const success = useCallback((message: string, duration?: number) => {
    return showToast(message, "success", duration);
  }, [showToast]);

  const error = useCallback((message: string, duration?: number) => {
    return showToast(message, "error", duration);
  }, [showToast]);

  const warning = useCallback((message: string, duration?: number) => {
    return showToast(message, "warning", duration);
  }, [showToast]);

  const info = useCallback((message: string, duration?: number) => {
    return showToast(message, "info", duration);
  }, [showToast]);

  return {
    toasts,
    showToast,
    closeToast,
    success,
    error,
    warning,
    info,
  };
}
