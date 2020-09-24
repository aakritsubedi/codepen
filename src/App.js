import React, { useState, useEffect } from "react";

import Editor from "component/Editor";
import Results from "component/Results";

import useLocalStorage from 'hooks/useLocalStorage';

import "assets/css/App.css";
import "assets/css/codepen.css";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
    `);
    }, 250);

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <div>
      <div className="pane top-pane">
        <Editor language="xml" usedFor="HTML" value={html} onChange={setHtml} />
        <Editor language="xml" usedFor="CSS" value={css} onChange={setCss} />
        <Editor
          language="xml"
          usedFor="Javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <Results srcDoc={srcDoc} />
    </div>
  );
}

export default App;
