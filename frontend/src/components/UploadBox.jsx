import { UploadCloud, X } from "lucide-react";

export default function UploadBox({ file, setFile, onAnalyze }) {

  const removeImage = () => {
    setFile(null);
  };

  return (
    <div className="card p-6">

      <h2 className="font-semibold text-lg text-gray-800 mb-5">
        Upload News Image
      </h2>

      {!file ? (

        /* ---------- UPLOAD AREA ---------- */
        <label
          className="
            w-full h-64
            border-2 border-dashed border-indigo-300
            rounded-xl
            flex flex-col items-center justify-center
            cursor-pointer
            bg-indigo-50
            hover:bg-indigo-100
            transition
          "
        >
          <UploadCloud
            size={42}
            className="text-indigo-500 mb-2"
          />

          <p className="text-gray-600 font-medium">
            Click or Drag Image Here
          </p>

          <span className="text-sm text-gray-400 mt-1">
            JPG, PNG supported
          </span>

          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />
        </label>

      ) : (

        /* ---------- PREVIEW ---------- */
        <div className="space-y-4">

          <div className="border rounded-xl p-3 bg-gray-50">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="
                rounded-lg
                max-h-72
                mx-auto
                object-contain
              "
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4">

            <button
              onClick={onAnalyze}
              className="primary-btn cursor-pointer"
            >
              Analyze Image
            </button>

            <button
              onClick={removeImage}
              className="
                flex items-center gap-2
                px-4 py-2
                border
                border-red-300
                text-red-500
                rounded-lg
                hover:bg-red-50
                transition
                cursor-pointer
              "
            >
              <X size={16}/>
              Re-upload
            </button>

          </div>

        </div>

      )}

    </div>
  );
}