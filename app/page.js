
"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, consent: true })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setMessages([
        ...next,
        { role: "assistant", content: data.reply }
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "দুঃখিত! AI সংযোগে সমস্যা হয়েছে।"
        }
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={{
      maxWidth: "850px",
      margin: "auto",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>✦ SURJO AI</h1>
      <h2>কী জানতে চাও আজ?</h2>

      <div style={{ minHeight: "400px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            padding: "12px",
            margin: "12px 0",
            background: "#f1f1f1",
            borderRadius: "12px"
          }}>
            <b>{m.role === "user" ? "তুমি" : "SURJO AI"}</b>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {m.content}
            </p>
          </div>
        ))}
        {busy && <p>SURJO AI ভাবছে...</p>}
      </div>

      <form onSubmit={send}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="এখানে প্রশ্ন লেখো..."
          rows={3}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px"
          }}
        />

        <button
          disabled={busy || !input.trim()}
          style={{
            padding: "12px 25px",
            marginTop: "10px",
            background: "#292832",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Send ↑
        </button>
      </form>

      <p style={{ color: "gray", fontSize: "12px" }}>
        AI ভুল করতে পারে। গুরুত্বপূর্ণ তথ্য যাচাই করো।
      </p>
    </main>
  );
}
