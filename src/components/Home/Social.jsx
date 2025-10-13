import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/hasni_dhyaa_/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://x.com/HasniDhiaa"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/MohamedDhia-Hasni"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <uil className="uil-github-alt"></uil>
      </a>
    </div>
  );
};

export default Social;
