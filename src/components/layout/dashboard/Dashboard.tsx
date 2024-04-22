import Actions from "./Actions";
import User from "./User";

export default function Dashboard() {
  return (
    <div className="flex flex-col laptop:grid grid-cols-3 gap-8 h-full mt-4">
      <User />
      <Actions />
    </div>
  )
}
