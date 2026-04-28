import { useState } from "react";
import UploadBox from "../components/UploadBox";
import ResultPanel from "../components/ResultPanel";
import Loader from "../components/Loader";
import { analyzeImage } from "../services/api";
import { toast } from "react-toastify";   

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {

    
    if (!file) {
      toast.error("Please upload an image first");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      toast.info("Processing image..."); 

      const res = await analyzeImage(file);

      if (!res) {
        throw new Error("Empty response");
      }

      setResult(res);

      toast.success("Analysis completed successfully"); 

    } catch (err) {
      console.error(err);

      toast.error(
        "Failed to analyze image. Backend not responding."
      ); 

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* LEFT */}
        <UploadBox
          file={file}
          setFile={setFile}
          onAnalyze={handleAnalyze}
        />

        {/* RIGHT */}
        <div className="h-full">
          {loading ? (
            <div className="card h-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <ResultPanel result={result} />
          )}
        </div>

      </div>
    </div>
  );
}