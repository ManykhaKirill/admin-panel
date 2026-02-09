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
            className="
              fixed inset-0 z-40
              bg-black/40
            "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div
              className={`
                w-full ${widthClass}
                bg-[var(--bg-surface)]
                text-[var(--text-primary)]
                border border-[var(--border-default)]
                rounded-[var(--radius-md)]
                shadow-[var(--shadow-md)]
                p-6
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <h2
                  className="
                    text-lg font-semibold
                    mb-4 pb-2
                    border-b border-[var(--border-subtle)]
                  "
                >
                  {title}
                </h2>
              )}
               <div className="mb-4">{children}</div>
              {footer && (
                <div className="flex justify-end gap-2">
                  {footer}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
