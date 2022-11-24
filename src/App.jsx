import LinkGroup from "./components/LinkGroup"
import LinkButton from "./components/LinkButton"

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-full min-h-screen dark:bg-slate-800">
        <div className="max-w-lg mx-auto my-8 md:mt-16 px-4 sm:px-2 w-full">
          <div className="flex flex-row p-4 rounded-xl justify-between my-2">
            <div className="">
              <h1 className="text-xl font-bold dark:text-white">Google Developer Students Club</h1>
              <p className="dark:text-white">Universitas Syiah Kuala</p>
            </div>
            <div className="">
              <img
                className="rounded-full w-12 h-12"
                src="profile-picture.jpg"
                alt="profile"
              />
            </div>
          </div>
          <LinkGroup title="Links">
            <LinkButton
              icon="🍔"
              title="Burger Land!"
              description="Tempat makan burger terdekat"
              url="https://instagram.com/gdscusk"
            />
          </LinkGroup>
          <LinkGroup title="Events">
            <LinkButton
              icon="📚"
              title="Other Link"
              description="Actually lead to somewhere special"
              url="https://instagram.com/gdscusk"
            />
            <LinkButton
              icon="🦁"
              title="Taman Budaya"
              description="Tempat tinggal singa"
              url="https://instagram.com/gdscusk"
            />
          </LinkGroup>
          <LinkGroup title="Resources">
            <LinkButton
              icon="🔗"
              title="Instagram"
              description="Instagram Link"
              url="https://instagram.com/gdscusk"
            />
          </LinkGroup>
        </div>
        <button onClick={toggleDarkMode}
          className="fixed z-90 bottom-10 right-8 bg-slate-800 dark:bg-white w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center">{darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default App
