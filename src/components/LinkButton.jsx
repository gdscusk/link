export default function LinkButton({icon, title, description, url}) {
  return (
    <a href={url} className="flex flex-row p-4 rounded-lg mb-2 hover:bg-gray-100">
      <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full bg-white">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex flex-col justify-center ml-4">
        <h3 className="font-bold">{title}</h3>
        <p className="font-light">{description}</p>
      </div>
    </a>
  );
}