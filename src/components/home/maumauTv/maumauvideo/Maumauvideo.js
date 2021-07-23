import React from "react";
import "./maumauvideo.css";

const Maumauvideo = () => {
  return (
    <div className="maumau-video">
      <div className="the-maumau-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/gH4F1CdQlF8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="maumau-video-caption">
          <h3 className="maumau-video-title">
            Lorem ipsum
          </h3>
          <p className="maumau-video-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
      </div>
    </div>
  );
};

export default Maumauvideo;
