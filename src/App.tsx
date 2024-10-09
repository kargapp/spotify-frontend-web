import { FC } from "react";
import { ModeToggle } from "./components/mode-toggle";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ModeToggle />
    </div>
  );
};

export default App;
