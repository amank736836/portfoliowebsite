const Resume = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--body-color)",
      }}
    >
      <div
        className="resumeFile"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://docs.google.com/document/d/1eQbyH1iGP2TRXzZaTrRaPpTZJP2ZEBwF/pub?embedded=true"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
