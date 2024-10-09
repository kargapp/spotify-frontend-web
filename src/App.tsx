import { FC } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/shadcn/resizable";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <main className="flex h-screen flex-col">
      <ResizablePanelGroup direction="horizontal" className="grow">
        <ResizablePanel className="bg-red-700">
          {"TODO: <Aside />"}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="bg-blue-700">
          {"TODO: <Main />"}
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="h-10 bg-green-700">{"TODO: <Player />"}</div>
    </main>
  );
};

export default App;
