import React, { useEffect, useState } from "react";
import MiscModal from "./MiscModal";
import { Menu } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Miscellaneous({ taskId }) {
  const TASK_ID = taskId; // replace this
  const API_URL = `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${taskId}/miscellaneous`;

  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const token = localStorage.getItem("token");
  console.log(token);
  const fetchData = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      setData(result ? result.data : []);
      console.log(result);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow flex flex-col">
      <div className="flex justify-between items-center py-4 px-6 border-b">
        <h2 className="text-lg font-medium min-h-10">Miscellaneous Info</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setModalOpen(true);
          }}
          className="border border-primary flex items-center gap-2 text-white px-3 py-1.5 rounded-md hover:bg-white bg-primary hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New
        </button>
      </div>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center text-gray-400 text-center">
            <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2" />
            <p>Miscellaneous info missing. Please update.</p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto p-4 h-full">
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-100 font-semibold text-gray-800">
              <tr>
                <th className="px-4 py-2">Miscellaneous</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.quantity}</td>
                  <td className="px-4 py-3 text-right">
                    ₹ {row.price?.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded-md">
                        <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setEditItem(row);
                                  setModalOpen(true);
                                }}
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                              >
                                <PencilSquareIcon className="w-4 h-4 mr-2" />
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleDelete(row.id)}
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } flex w-full items-center px-4 py-2 text-sm text-red-600`}
                              >
                                <TrashIcon className="w-4 h-4 mr-2" />
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <MiscModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onRefresh={fetchData}
          editData={editItem}
          taskId={TASK_ID}
        />
      )}
    </div>
  );
}
