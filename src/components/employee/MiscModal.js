import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const token = localStorage.getItem("token");

const MiscModal = ({ isOpen, onClose, onRefresh, editData, taskId }) => {
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });

  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name,
        quantity: editData.quantity,
        price: editData.price,
      });
    } else {
      setForm({ name: "", quantity: "", price: "" });
    }
  }, [editData]);

  const handleSubmit = async () => {
    try {
      const url = editData
        ? `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${taskId}/miscellaneous/${editData.id}`
        : `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${taskId}/miscellaneous`;

      const method = editData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          quantity: form.quantity,
          price: Number(form.price),
        }),
      });

      if (res.ok) {
        onRefresh();
        onClose();
      } else {
        console.error("Failed to save:", await res.text());
      }
    } catch (err) {
      console.error("Error saving data", err);
    }
  };

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
            <Dialog.Panel className="bg-white w-full max-w-lg rounded-xl shadow-lg p-4">
              <div className="flex justify-between items-start border-b pb-3">
                <div>
                  <Dialog.Title className="text-lg font-semibold">
                    Miscellaneous Info
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-500">
                    Please fill in the details of the new miscellaneous Info.
                  </Dialog.Description>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <label className="text-sm">Miscellaneous Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2 mt-1"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm">Quantity</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2 mt-1"
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm">Price</label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2 mt-1"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-6 border-t mt-6">
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
                  {editData ? "Update" : "Submit"}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MiscModal;
