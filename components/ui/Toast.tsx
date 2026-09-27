"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, isVisible, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-3 rounded-lg border px-5 py-3.5 shadow-2xl shadow-black/40"
          style={{
            borderColor: type === "success" ? "rgba(84,230,210,0.4)" : "rgba(239,68,68,0.4)",
            background: type === "success" ? "rgba(16,21,29,0.95)" : "rgba(30,15,15,0.95)",
            backdropFilter: "blur(12px)",
          }}
          role="alert"
        >
          {type === "success" ? (
            <CheckCircle2 size={20} className="text-accent-teal shrink-0" />
          ) : (
            <XCircle size={20} className="text-red-400 shrink-0" />
          )}
          <p className="text-sm text-ink">{message}</p>
          <button
            onClick={onClose}
            className="ml-2 shrink-0 rounded-md p-1 text-ink-faint hover:text-ink transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
