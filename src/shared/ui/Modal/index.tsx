import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  widthClass?: string;
}

export const Modal = ({
  open,
  title,
  children,
  onClose,
  footer,
  widthClass = "max-w-lg",
}: ModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={`fixed z-50 inset-0 flex items-center justify-center`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div
              className={`bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-full ${widthClass}`}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                  {title}
                </h2>
              )}
              <div className="mb-4">{children}</div>
              {footer && <div className="flex justify-end gap-2">{footer}</div>}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
