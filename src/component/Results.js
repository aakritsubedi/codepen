import React from "react";

function Results({ srcDoc }) {
  return (
    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="results"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Results;
