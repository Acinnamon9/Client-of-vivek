# AI Brain Animation Bundle

This folder contains the self-contained animation components from the Floating Mobile Hero project. You can drop this entire folder into any React project.

## 📁 Files
- `NeuralNetwork.tsx`: The main brain visualization with 3D breathing and radiating signals.
- `ConnectionLines.tsx`: The background horizontal convergence lines.
- `brain_blue.webp`: The high-quality brain asset.

## 🚀 Setup

### 1. Install Dependencies
Ensure you have the following packages in your target project:
```bash
npm install framer-motion lucide-react
```

### 2. Integration
Import and use the components in your Hero section. Both components are designed to fill their parent container, so ensure the parent has `position: relative` and `overflow: hidden`.

```tsx
import { NeuralNetwork } from './animation-bundle/NeuralNetwork';
import { ConnectionLines } from './animation-bundle/ConnectionLines';

export const MyHero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {/* Background Layer */}
            <ConnectionLines />
            
            {/* Animation Layer */}
            <div className="absolute inset-0 pointer-events-none">
                <NeuralNetwork />
            </div>
            
            {/* Content Layer */}
            <div className="relative z-20 container mx-auto px-6 pt-32">
                <h1>My Awesome Hero</h1>
                {/* ... your content ... */}
            </div>
        </div>
    );
};
```

## 🛠️ Customization
- **Convergence Point**: To change where the background lines meet, edit `focalX` and `focalY` in `ConnectionLines.tsx`.
- **Colors**: Search for hex codes like `#3655E8` (Blue) or `#cbd5e1` (Gray) in the TSX files to match your brand colors.
- **Timing**: Adjust the `dur` (duration) attributes in the `<animateMotion>` tags to speed up or slow down signals.
