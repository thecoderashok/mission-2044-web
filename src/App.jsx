import "./App.scss";
import BootstrapClient from "./bootstrap-client";
import CustomRouterProvider from "./context/CustomRouter/CustomRouterProvider";
import LoaderProvider from "./context/Loader/LoaderProvider";
import FormLoaderProvider from "./context/FormLoader/FormLoaderProvider";
import ScrollProvider from "./context/Scroll/ScrollProvider";
import ResizeProvider from "./context/Resize/ResizeProvider";
import TransitionWrapper from "./components/Route/TransitionWrapper";
import ToastProvider from "./context/Toast/ToastProvider";
import LenisProvider from "./context/Lenis/LenisProvider";
import useHashScroll from "./hook/useHashScroll";
import AppRoutes from "./AppRoutes";
import ModalProvider from "./context/Modal/ModalProvider";
import BookAppointmentModal from "./components/Modal/BookAppointmentModal";

function App() {
    useHashScroll();

    return (
        <>
            <BootstrapClient />
            <CustomRouterProvider>
                <LenisProvider>
                    <LoaderProvider>
                        <ResizeProvider>
                            <ScrollProvider>
                                <ModalProvider>
                                    <FormLoaderProvider>
                                        <ToastProvider>
                                            <TransitionWrapper />
                                            <AppRoutes />
                                            <BookAppointmentModal />
                                        </ToastProvider>
                                    </FormLoaderProvider>
                                </ModalProvider>
                            </ScrollProvider>
                        </ResizeProvider>
                    </LoaderProvider>
                </LenisProvider>
            </CustomRouterProvider>
        </>
    );
}

export default App;
