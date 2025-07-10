import { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

const RootElement = document.getElementById('root');
const Root = createRoot(RootElement);
Root.render(
  <App />
)
