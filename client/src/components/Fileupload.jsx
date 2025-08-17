export default function FileUpload({ transcript, setTranscript }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setTranscript(event.target.result);
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <label>Upload Transcript (.txt): </label>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <textarea
        placeholder="Or paste transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={6}
        cols={60}
      />
    </div>
  );
}