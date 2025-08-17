export default function summaryEditor({ summary, setSummary }) {
  return (
    <div>
      <h3>Summary (editable):</h3>
      <textarea
        value={summary}
        className="summary-box"
        onChange={(e) => setSummary(e.target.value)}
        rows={6}
        cols={60}
      />
    </div>
  );
}