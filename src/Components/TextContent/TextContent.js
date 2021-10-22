import React from "react";
import Link from "Components/Link/Link";

const TextContent = ({ header, context, title, href, secondaryButton }) => {
  // secondaryButton determines the color of the link tag
  return (
    <div className="section-text-content">
      <h1>{header}</h1>
      <h2>{context}</h2>
      <Link
        title={title}
        link={href}
        secondaryButton={secondaryButton ? secondaryButton : null}
      />
    </div>
  );
};

export default TextContent;
