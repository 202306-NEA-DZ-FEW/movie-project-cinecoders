import React from "react"

export default function Trailer({ trailers }) {
  const trailer = trailers.find((item) => item.type === "Trailer")

  return (
    <div>
      {trailer ? (
        <iframe
          width="504"
          height="284"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="trailerNone"
          style={{
            backgroundColor: "#ffe0e0",
            border: "1px solid #ff0000",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            color: "#ff0000",
            margin: "auto",
            marginTop: "5rem",
            width: "350px",
            height: "100px",
          }}
        >
          <span
            className="info-symbol"
            style={{
              fontSize: "24px",
              marginRight: "10px",
              marginLeft: "4rem",
            }}
          >
            ℹ️
          </span>
          <p style={{ marginLeft: "1rem" }}>Trailer not available</p>
        </div>
      )}
    </div>
  )
}
