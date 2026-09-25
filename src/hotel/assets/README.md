# Hotel Assets

This folder is reserved for local assets if needed.

Currently, all images are sourced from Unsplash via URLs in the data files:
- src/hotel/data/rooms.js
- src/hotel/data/gallery.js
- src/hotel/data/amenities.js
- src/hotel/data/dining.js

To use local images:
1. Add image files to this folder
2. Update the image paths in the data files
3. Import them using Vite's asset handling

Example:
```javascript
import courtyardRoom from '../assets/images/courtyard-room.jpg';

// Then use in data:
image: courtyardRoom,