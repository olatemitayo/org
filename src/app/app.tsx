import { RecoilRoot } from "recoil";
import TodoList from '../components/TodoList';



export function App() {
  return (
    <div>
      <RecoilRoot>
      <div className="min-h-screen flex flex-col px-2 sm:max-w-[95%] md:max-w-[70%] w-full mx-auto  md:py-10">
       
          <h1 className="text-2xl font-bold mb-4 ">Todo List</h1>
          <TodoList />
       
      </div>
    </RecoilRoot>
    </div>
  );
}

export default App;
