export default function LinkGroup({ groupName, children }) {
  return (
    <div className="flex flex-col p-4 rounded-xl my-2">
      <h2 className="font-lg font-bold mb-2 dark:text-white">{groupName}</h2>
      {children}
    </div>
  );
}
