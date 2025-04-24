import React from 'react';
// import './flip.min.css';
// import './CountdownTimer.css';

interface CountdownTimerProps {
  initialHours?: number;
  onComplete?: () => void;
}

// This is the final integrated component that can be used in the existing React code
const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialHours = 72, 
  onComplete 
}) => {
  // We'll use a ref to access the DOM element
  const tickRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    // Function to initialize the Tick instance
    const initializeTick = () => {
      if (!tickRef.current || !window.Tick) return;
      
      // Create a new Tick instance
      const tick = new window.Tick.DOM.create(tickRef.current);
      
      // Set up the countdown
      const endDate = new Date();
      endDate.setHours(endDate.getHours() + initialHours);
      
      // Initialize the countdown
      const ticker = window.Tick.count.down(endDate);
      
      // Update the tick value when the countdown updates
      ticker.onupdate = function(value: any) {
        tick.value = value;
      };
      
      // Handle completion if needed
      if (onComplete) {
        ticker.oncomplete = onComplete;
      }
    };
    
    // Check if Tick is already loaded
    if (window.Tick) {
      initializeTick();
    } else {
      // Load the Tick library
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@pqina/flip@1.8.0/dist/flip.min.js';
      script.async = true;
      script.onload = initializeTick;
      document.body.appendChild(script);
      
      // Cleanup function
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [initialHours, onComplete]);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="tick-wrapper">
        <div 
          ref={tickRef}
          className="tick"
        >
          <div
            data-repeat="true"
            data-layout="horizontal center fit"
            data-transform="preset(d, h, m, s) -> delay"
          >
            <div className="tick-group">
              <div
                data-key="value"
                data-repeat="true"
                data-transform="pad(00) -> split -> delay"
              >
                <span data-view="flip"></span>
              </div>

              <span data-key="label" data-view="text" className="tick-label"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add TypeScript declaration for the Tick library
declare global {
  interface Window {
    Tick: any;
  }
}

export default CountdownTimer;
