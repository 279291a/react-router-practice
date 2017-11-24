import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import BasicExample from './BasicExample'
// import ParamsExample from './ParamsExample'
// import AuthExample from './AuthExample';
// import CustomLinkExample from './CustomLinkExample';
// import PreventingTransitionsExample from './PreventingTransitionsExample';
// import NoMatchExample from './NoMatchExample';
// import RecursiveExample from './RecursiveExample';
// import SlideExample from './SlideExample';
// import AnimationExample from './AnimationExample';
// import Animation from './Animation';
// import AmbiguousMatch from './AmbiguousExample';
// import RouteConfig from './RouteConfig';
import ModalGallery from './ModalGallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ModalGallery />, document.getElementById('root'));
registerServiceWorker();
