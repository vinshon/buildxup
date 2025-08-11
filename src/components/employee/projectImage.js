import React, { useEffect, useState } from "react";
import ProjectImageModal from "./ProjectImageModal";


export default function ProjectImages({taskId}) {
    const TASK_ID = taskId; // replace with actual
const API_URL = `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${TASK_ID}/images`;

  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editImage, setEditImage] = useState(null);

  const fetchImages = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      setImages(Array.isArray(result) ? result : []);

    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchImages();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="bg-white rounded-xl mt-5 shadow flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center py-3 px-6 border-b">
        <h2 className="text-lg font-medium">Project Images</h2>
        <button
          onClick={() => {
            setEditImage(null);
            setModalOpen(true);
          }}
          className="border border-blue-600 flex items-center gap-2 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add New
        </button>
      </div>

      {images.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center text-gray-400 text-center">
            <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2" />
            <p>Project Images missing. Please update.</p>
          </div>
        </div>
      ) : (
        <div className="p-4 grid grid-cols-6 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <img
                src={img.task_image}
                alt={img.description}
                className="w-full h-20 object-cover rounded-md"
              />
              <div className="absolute top-1 right-1 hidden group-hover:flex gap-1">
                <button
                  onClick={() => {
                    setEditImage(img);
                    setModalOpen(true);
                  }}
                  className="text-blue-600 hover:underline text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(img.id)}
                  className="text-red-600 hover:underline text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <ProjectImageModal
          onClose={() => setModalOpen(false)}
          onRefresh={fetchImages}
          editImage={editImage}
          taskId={TASK_ID}
        />
      )}
    </div>
  );
}
