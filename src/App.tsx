import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./components/Categories/Categories";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Categories />
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
