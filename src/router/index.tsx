import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageNotFound from "../components/feedback/PageNotFound";
import RootLayout from "../layout/RootLayout";
import DashboardMain from "../pages/DashboardMain";
import Medical from "../pages/MedicalSection/Medical";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}  >

      <Route index element={<DashboardMain />} />
      <Route path="medical" element={<Medical />} />


      <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);

export default router;