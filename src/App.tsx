import { FC } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/shadcn/resizable";
import { Skeleton } from "./components/shadcn/skeleton";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <main className="flex h-screen flex-col">
      <ResizablePanelGroup direction="horizontal" className="grow">
        <ResizablePanel className="">
          <aside className="h-full overflow-y-auto">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-2 hover:bg-primary"
              >
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-4 w-52" />
                </div>
              </div>
            ))}
          </aside>
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
