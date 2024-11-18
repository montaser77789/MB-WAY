import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageNotFound from "../components/feedback/PageNotFound";
import RootLayout from "../layout/RootLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}  >


      <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);

export default router;