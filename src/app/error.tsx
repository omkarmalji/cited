"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="app-container">
      <h1>Something interrupted this page.</h1>
      <p>No content was approved or published by this error.</p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
