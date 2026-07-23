import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthShell from "@/components/layout/AuthShell";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Citizen Portal Sign In — Huduma Virtual Centre</title>
      </Head>

      <h1 className="h2 fw-bold mb-1">Citizen Portal Sign In</h1>
      <p className="text-secondary mb-4">Access your applications, payments and certificates in one place.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="citizen-identifier">
          <Form.Label>National ID Number or Email</Form.Label>
          <Form.Control type="text" placeholder="e.g. 32145678 or jane@example.com" required autoFocus />
        </Form.Group>
        <Form.Group className="mb-4" controlId="citizen-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="••••••••" required />
        </Form.Group>
        <Button type="submit" variant="primary" size="lg" className="w-100 mb-3" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </Button>
      </Form>

      <div className="d-flex align-items-center gap-3 my-3">
        <hr className="flex-grow-1" />
        <span className="text-secondary small">or</span>
        <hr className="flex-grow-1" />
      </div>

      <Button variant="outline-primary" size="lg" className="w-100 mb-4" onClick={handleSubmit}>
        <i className="bi bi-box-arrow-in-right me-2" />
        Continue with eCitizen
      </Button>

      <p className="text-center mb-0">
        Have no account?{" "}
        <Link href="/register" className="fw-semibold">
          Create account
        </Link>
      </p>
    </>
  );
}

LoginPage.getLayout = (page) => <AuthShell>{page}</AuthShell>;
