import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

try{

  const rootElement:any = document.getElementById('root');
  const root:any = createRoot(rootElement);
  
  document.addEventListener("DOMContentLoaded", function(event) {
    var script = document.createElement("script");
    document.body.appendChild(script);
  });
  
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

}catch(e:any){

  console.log("\n src/index exception.");;
  console.log(e.message);

}finally{

  console.log('src/index reactJS TypeScript finally.');

}
