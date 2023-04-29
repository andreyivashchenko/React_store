import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="cards"
    speed={2}
    width={255}
    height={470}
    viewBox="0 0 255 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="8" y="21" rx="10" ry="10" width="238" height="233" />
    <rect x="5" y="269" rx="10" ry="10" width="243" height="33" />
    <rect x="4" y="316" rx="10" ry="10" width="243" height="54" />
    <rect x="5" y="390" rx="10" ry="10" width="102" height="54" />
    <rect x="145" y="391" rx="10" ry="10" width="102" height="53" />
  </ContentLoader>
);

export default Skeleton;
