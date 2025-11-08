import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./components/Categories/Categories";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import InfoPage from "./pages/InfoPage";
import EventPage from "./pages/EventPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Categories />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info-page" element={<InfoPage />} />
          <Route path="/event-page" element={<EventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
