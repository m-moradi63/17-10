import { Profile } from "../Pages/profile.tsx";
import { Repotab } from "../Pages/RepoTab.tsx";
import { Route, Routes } from "react-router-dom";
import { Repositories } from "../Pages/Repositories.tsx";
import { Reposit } from "../subcomponent/Repository.tsx";


export function Main() {
  return (
    <div className="max-w-full m-auto   ">
     
      <Routes>
        <Route index element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:Repotab" element={<Repotab />} />
        <Route path="/:username/Overview" element={<Profile />} />
        <Route path="/:username/Repositories" element={<Repositories />} />
      </Routes>
    </div>
  );
}
