import Head from "next/head";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const faqs = [
  "How do I check my application status?",
  "How do I replace a lost National ID?",
  "What documents do I need for a driving licence renewal?",
  "How do I pay via eCitizen?",
];

export default function Support() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Habari! I'm the DGSP AI Assistant. Ask me anything about your applications (CWA-14)." },
  ]);
  const [input, setInput] = useState("");

  function send(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "citizen", text: input },
      { from: "bot", text: "Thanks — let me check that for you. (Demo response; connect a real backend here.)" },
    ]);
    setInput("");
  }

  return (
    <div>
      <Head>
        <title>Support — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Support</h1>

      <Row className="g-3">
        <Col lg={7}>
          <Card className="hvc-card">
            <Card.Body>
              <Card.Title className="h6 mb-3">AI Assistant</Card.Title>
              <div className="hvc-surface-muted rounded-3 p-3 mb-3" style={{ maxHeight: 320, overflowY: "auto" }}>
                {messages.map((m, i) => (
                  <div key={i} className={`d-flex mb-2 ${m.from === "citizen" ? "justify-content-end" : ""}`}>
                    <div
                      className={`rounded-3 px-3 py-2 small ${
                        m.from === "citizen" ? "bg-primary text-white" : "bg-white border"
                      }`}
                      style={{ maxWidth: "80%" }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <Form onSubmit={send} className="d-flex gap-2 mb-3">
                <Form.Control
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question in English or Swahili..."
                />
                <Button type="submit" variant="primary">
                  Send
                </Button>
              </Form>
              <div className="d-flex flex-wrap gap-2">
                {faqs.map((q) => (
                  <Button key={q} size="sm" variant="outline-secondary" onClick={() => setInput(q)}>
                    {q}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={5}>
          <Card className="hvc-card mb-3">
            <Card.Body>
              <Card.Title className="h6 mb-2">Call for Help</Card.Title>
              <p className="text-secondary small">
                Connect directly to the Huduma call centre; your citizen ID and application context are shared with the
                agent automatically.
              </p>
              <Button variant="primary" className="w-100">
                <i className="bi bi-telephone me-1" />
                Call Huduma Contact Centre
              </Button>
            </Card.Body>
          </Card>

          <Card className="hvc-card">
            <Card.Body>
              <Card.Title className="h6 mb-2">Document checklists (CWA-15)</Card.Title>
              <p className="text-secondary small">
                Review the document checklist for any service before you start, from its Roadmap page.
              </p>
              <a href="/" className="btn btn-outline-secondary w-100">
                Browse services
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
