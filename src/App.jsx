import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/Contact/Contact';
import RootLayout from './components/RootLayout';
import ErrorRoute from './components/ErrorRoute';
import Service1 from './components/servicepages/service1';
import Service2 from './components/servicepages/service2';
import Service3 from './components/servicepages/service3';
import Service4 from './components/servicepages/service4';
import Service5 from './components/servicepages/service5';
import Service6 from './components/servicepages/service6';
import Service7 from './components/servicepages/service7';
import Service8 from './components/servicepages/service8';
import Service9 from './components/servicepages/service9';
import Gallery from './components/Gallery/Gallery';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorRoute />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'services',
                    element: <Services />,
                },
                        {
                            path: 'service1',
                            element: <Service1 />
                        },
                        {
                            path: 'service2',
                            element: <Service2 />
                        },
                        {
                            path: 'service3',
                            element: <Service3 />
                        },
                        {
                            path: 'service4',
                            element: <Service4 />
                        },
                        {
                            path: 'service5',
                            element: <Service5 />
                        },
                        {
                            path: 'service6',
                            element: <Service6 />
                        },
                        {
                            path: 'service7',
                            element: <Service7 />
                        },
                        {
                            path: 'service8',
                            element: <Service8 />
                        },
                        {
                            path: 'service9',
                            element: <Service9 />
                        },
                {
                    path: 'aboutus',
                    element: <AboutUs />
                },
                {
                    path: 'contact',
                    element: <ContactForm />
                },
                {
                    path: 'gallery',
                    element: <Gallery />
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
            <div className="p-1 rounded-circle" style={{ backgroundColor: '#0BF446', position: 'fixed', bottom: '10px', right: '10px', zIndex: 5 }}>
                <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon" style={{ color: 'inherit' }}>
                    <FaWhatsapp style={{ fontSize: '50px', color: 'white' }} />
                </a>
            </div>
        </>
    );
}

export default App;