import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./components/Categories/Categories";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import InfoPage from "./pages/InfoPage";
import EventPage from "./pages/EventPage";
import MoviePage from "./pages/MoviePage";
import { useLayoutEffect, type PropsWithChildren } from "react";

const ScrollToTopWrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Navbar />
          <Categories />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/info-page" element={<InfoPage />} />
            <Route path="/event-page" element={<EventPage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Routes>
          <Footer />
        </ScrollToTopWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
