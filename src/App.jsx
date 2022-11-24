import LinkGroup from "./components/LinkGroup"
import LinkButton from "./components/LinkButton"

function App() {
  return (
    <div className="max-w-lg mx-auto my-8 md:mt-16 px-4 sm:px-2">
      <div className="flex flex-row p-4 rounded-xl justify-between my-2">
        <div className="">
          <h1 className="text-xl font-bold">Google Developer Students Club</h1>
          <p className="font-light">Universitas Syiah Kuala</p>
        </div>
        <div className="">
          <img
            className="rounded-full w-12 h-12"
            src="https://avatars.githubusercontent.com/u/91535694?s=200&v=4"
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
  )
}

export default App
