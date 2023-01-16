import LinkGroup from "./components/LinkGroup";
import LinkButton from "./components/LinkButton";
import links from "../data/links.json";

import { Helmet } from "react-helmet";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="app">
      <Helmet>
        <title>GDSC USK | Links</title>
        <link rel="icon" href="google-dev-logo.png" type="image/png" />
      </Helmet>

      <div className={darkMode ? "dark" : ""}>
        <div className="flex h-full min-h-screen dark:bg-slate-800">
          <div className="max-w-lg mx-auto my-8 md:mt-16 px-4 sm:px-2 w-full">
            <div className="flex flex-row p-4 rounded-xl justify-between my-2">
              <div className="">
                <h1 className="text-xl font-bold dark:text-white">
                  Google Developer Student Club
                </h1>
                <p className="dark:text-white">Universitas Syiah Kuala</p>
              </div>
              <div>
                <img
                  className="rounded-full w-12 h-12"
                  src="profile-picture.jpg"
                  alt="profile"
                />
              </div>
            </div>

            {links.map((linkGroup) => (
              <LinkGroup
                key={linkGroup.groupName}
                groupName={linkGroup.groupName}
              >
                {linkGroup.links.map((link) => (
                  <LinkButton key={link.title} {...link} />
                ))}
              </LinkGroup>
            ))}

            <div className="space-x-4 mt-11 text-center">
              <p className="dark:text-white">
                2023 - GDSC Universitas Syiah Kuala
              </p>
            </div>

          </div>
          <button
            onClick={toggleDarkMode}
            className="fixed z-90 bottom-10 right-8 bg-slate-800 dark:bg-white w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
