import { useState } from "react";

export default function EmailForm({ emails, setEmails, title, setTitle, summary }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setStatus(null);

    const emailList = emails.split(",").map((e) => e.trim()).filter(Boolean);
    if (!emailList.length || !title) {
      setStatus({ type: "error", msg: "❌ Please enter valid emails and subject." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emails: emailList,
          title,
          description: summary,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: "✅ Email sent successfully!" });
      } else {
        setStatus({ type: "error", msg: `❌ Failed to send: ${data.message || "Unknown error"} may be invalid email or body of mail is missing` });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "❌ Network error while sending email." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form">
      <div className="input-group">
        <label htmlFor="emails">Recipient Emails (comma separated)</label>
        <input
          id="emails"
          type="text"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          placeholder="example1@gmail.com, example2@gmail.com"
        />
      </div>

      <div className="input-group">
        <label htmlFor="subject">Email Subject</label>
        <input
          id="subject"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter subject"
        />
      </div>

      <button onClick={handleSend} disabled={loading}>
        {loading ? "Sending..." : "Send Email"}
      </button>

      {status && (
        <p className={`status-msg ${status.type === "success" ? "success" : "error"}`}>
          {status.msg}
        </p>
      )}
    </div>
  );
}
