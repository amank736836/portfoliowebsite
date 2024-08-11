const Resume = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTuWokH7Wlj5zIUhk8WRmzf9Hc4_HyBK3TvJW9tRHhTzpFD27uESgjDusk9-Imj28Fq6r5fqtFbTni6/pub?embedded=true"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default Resume;
