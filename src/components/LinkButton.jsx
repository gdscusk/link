export default function LinkButton({ icon, title, description, url }) {
  return (
    <a
      href={url}
      className="flex border-2 border-slate-200 dark:border-white/40 flex-row p-4 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-slate-700"
    >
      <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full bg-white dark:bg-slate-200">
        {
          icon.startsWith("icons/") ? (
            <img className="p-2" src={icon} alt={title + "Icon"} />
          ) : (
            <span className="text-2xl">{icon}</span>
          )
        }
      </div>
      <div className="flex flex-col justify-center ml-4">
        <h3 className="font-bold dark:text-white">{title}</h3>
        <p className="font-light dark:text-white">{description}</p>
      </div>
    </a>
  );
}
