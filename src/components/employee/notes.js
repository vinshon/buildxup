import React, { useEffect, useState } from "react";

export default function Notes({ taskId }) {
  const API_URL = `https://api-stage.buildxup.com/tasks/${taskId}/notes`;

  const [note, setNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");

  const fetchNote = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const noteData = data?.data[0];
      setNote(noteData || null);
      setContent(noteData?.content || "");
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const handleSave = async () => {
    const method = note ? "PUT" : "POST";
    const url = note ? `${API_URL}/${note.id}` : API_URL;

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });
      setIsEditing(false);
      fetchNote();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`${API_URL}/${note.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNote(null);
      setContent("");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow flex flex-col">
      <div className="flex justify-between items-center py-4 px-6 border-b">
        <h2 className="text-lg font-medium min-h-10">Notes</h2>
        {note && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="border border-primary flex items-center gap-2 text-white px-3 py-1.5 rounded-md hover:bg-white bg-primary hover:text-primary"
          >
            Edit Note
          </button>
        )}
      </div>

      <div className="p-6  h-full">
        {note || isEditing ? (
          <>
            <textarea
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={!isEditing}
              className={`min-h-72 w-full p-4 rounded-md resize-none transition border bg-white ${
                isEditing ? "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary" : "border-transparent"
              }`}
            />

            {isEditing && (
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setContent(note?.content || "");
                    setIsEditing(false);
                  }}
                  className="border px-4 py-1.5 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            )}

            {/* {!isEditing && (
              <button
                onClick={handleDelete}
                className="text-red-600 hover:underline text-sm"
              >
                Delete Note
              </button>
            )} */}
          </>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center text-gray-400 text-center">
              <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2" />
              <p>Notes info missing. Please update.</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 border px-4 py-1.5 rounded-md text-white bg-primary hover:bg-white hover:text-primary"
              >
                Add Note
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
