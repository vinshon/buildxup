import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ProjectImageModal({ onClose, onRefresh, editImage, taskId }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editImage) {
      setDescription(editImage.description);
      setPreview(editImage.task_image);
    } else {
      setDescription("");
      setPreview("");
      setFile(null);
    }
  }, [editImage]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (file) formData.append("images", file);
    formData.append("description", description);

    const url = editImage
      ? `https://api-stage.buildxup.com/tasks/${taskId}/images/${editImage.id}`
      : `https://api-stage.buildxup.com/tasks/${taskId}/images`;
    const method = editImage ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      onClose();
      onRefresh();
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
                <div className="flex justify-between items-center border-b p-4">
                  <Dialog.Title className="text-lg font-semibold">
                    {editImage ? "Edit Image" : "Upload Image"}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-black text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  <input
                    type="file"
                    onChange={(e) => {
                      const selected = e.target.files[0];
                      setFile(selected);
                      if (selected) setPreview(URL.createObjectURL(selected));
                    }}
                    className="w-full"
                  />
                  <textarea
                    rows={3}
                    placeholder="Image Description"
                    className="w-full border rounded-md p-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
                  >
                    {editImage ? "Update" : "Upload"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
