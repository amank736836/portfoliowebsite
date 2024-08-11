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
          src="https://docs.google.com/document/d/e/2PACX-1vTuWokH7Wlj5zIUhk8WRmzf9Hc4_HyBK3TvJW9tRHhTzpFD27uESgjDusk9-Imj28Fq6r5fqtFbTni6/pub?embedded=true"
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
