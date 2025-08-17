import { useState } from "react";
import FileUpload from "./components/Fileupload";
import PromptInput from "./components/PromptInput";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import "./App.css";

const API_BASE = import.meta.env.VITE_API_URL 

function App() {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [emails, setEmails] = useState("");
  const [title, setTitle] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false); // loading state

  const generateSummary = async () => {
    if (!prompt.trim()) {            // check if prompt is empty
    alert("⚠️ Please enter a prompt before generating summary!");
    return;
  }
  
  if (!transcript.trim()) {
    alert("⚠️ Please provide a transcript!");
    return;
  }
    setSummaryLoading(true); // show loading immediately

    try {
      const res = await fetch(`${API_BASE}/summarise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: transcript, prompt }),
      });
      const data = await res.json();
      setSummary(data.output || "");
    } catch (err) {
      alert("Error generating summary");
      console.error(err);
    } finally {
      setSummaryLoading(false); // stop loading
    }
  };

  return (
    <div className="app-container">
      <h2>AI Meeting Summarizer</h2>

      <div className="form-group">
        <label>Transcript (.txt or paste manually):</label>
        <FileUpload transcript={transcript} setTranscript={setTranscript} />
      </div>

      <div className="form-group">
        <label>Instruction / Prompt:</label>
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          generateSummary={generateSummary}
          loading={summaryLoading} // pass loading state
        />
      </div>

      <div className="form-group">
        <label>Generated Summary (editable):</label>
        <SummaryEditor summary={summary} setSummary={setSummary} />
      </div>

      <div className="form-group">
        <label>Email Details:</label>
        <EmailForm
          emails={emails}
          setEmails={setEmails}
          title={title}
          setTitle={setTitle}
          summary={summary}
        />
      </div>
    </div>
  );
}

export default App;
