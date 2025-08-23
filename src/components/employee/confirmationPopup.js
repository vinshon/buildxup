// components/ConfirmationDialog.jsx
"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function ConfirmationDialog({
  open,
  setOpen,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  onConfirm,
  confirmLabel = "Yes",
  cancelLabel = "Cancel",
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-white p-6 text-center shadow-xl transition-all">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {title}
          </DialogTitle>
          <p className="mt-2 text-sm text-gray-600">{message}</p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              {cancelLabel}
            </button>
            <button
              onClick={() => {
                onConfirm?.();
                setOpen(false);
              }}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              {confirmLabel}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
