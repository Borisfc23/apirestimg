import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import ModalImage from "react-modal-image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SearchResult = ({ src, alt, tags, isLoading }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="grid-item">
      {src ? (
        <ModalImage small={src} large={src} alt={alt} showRotate={true} />
      ) : (
        <Skeleton count={1} height={"200px"} />
      )}
      <a className={`${darkMode ? "letra-oscuro" : ""}`} target="_blank">
        {alt || <Skeleton count={1} />} <br />
        {tags.map((tag, index) => (
          <span style={{ color: "#3194DB" }} key={index}>
            #{tag.title || <Skeleton count={1} />}
          </span>
        ))}
      </a>
    </div>
  );
};

export default SearchResult;
