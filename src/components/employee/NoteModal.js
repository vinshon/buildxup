// components/NoteModal.jsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NoteModal = ({ isOpen, onClose, content, setContent, onSave, isEdit }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white rounded-xl w-full max-w-lg shadow-lg">
              <div className="flex justify-between items-center border-b p-4">
                <Dialog.Title className="text-lg font-semibold">
                  {isEdit ? "Edit Note" : "Add Note"}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="p-4">
                <textarea
                  rows={6}
                  className="w-full border rounded-md p-2"
                  placeholder="Write your note..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 p-4 border-t">
                <button
                  onClick={onClose}
                  className="border px-4 py-1.5 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={onSave}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
                >
                  {isEdit ? "Update" : "Save"}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NoteModal;
