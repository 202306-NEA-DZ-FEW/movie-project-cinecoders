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
        <div className="trailerNone">
          <span className="info-symbol">ℹ️</span>
          <p>Trailer not available</p>
        </div>
      )}
    </div>
  )
}
