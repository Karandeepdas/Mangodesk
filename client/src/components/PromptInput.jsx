export default function PromptInput({ prompt, setPrompt, generateSummary, loading }) {
  return (
    <div className="prompt-input">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your instruction"
      />
      <button onClick={generateSummary} disabled={loading}>
        {loading ? "Generating..." : "Generate Summary"}
      </button>
    </div>
  );
}
