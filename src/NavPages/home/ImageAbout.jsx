import React, { useState } from "react";
// Import images from your assets folder
import image1 from "../../../src/assets/About.png";
import image2 from "../../../src/assets/ubaid.jpg";
import image3 from "../../../src/assets/ezilineee.jpg";

const ImageViewer = () => {
    const images = [image1, image2, image3]; // Use imported images here
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoom, setZoom] = useState(1);

    const zoomIn = () => {
        setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Maximum zoom level 3
    };

    const zoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Minimum zoom level 0.5
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
        setZoom(1); // Reset zoom when changing images
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
        setZoom(1); // Reset zoom when changing images
    };

    return (
        <div className="image-viewer" style={{ textAlign: "center", padding: "20px" }}>
            <div
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    border: "2px solid #ddd",
                    padding: "10px",
                    marginBottom: "10px",
                    width: "600px",
                    height: "800px",
                }}
            >
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    style={{
                        transform: `scale(${zoom})`,
                        transition: "transform 0.3s ease",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div>
                <button onClick={zoomOut} style={{ margin: "5px", padding: "10px" }}>
                    Zoom Out
                </button>
                <button onClick={zoomIn} style={{ margin: "5px", padding: "10px" }}>
                    Zoom In
                </button>
            </div>
            <div>
                <button onClick={prevImage} style={{ margin: "5px", padding: "10px" }}>
                    Previous Image
                </button>
                <button onClick={nextImage} style={{ margin: "5px", padding: "10px" }}>
                    Next Image
                </button>
            </div>
        </div>
    );
};

export default ImageViewer;
















// import React, { useState } from "react";

// const ImageViewer = () => {
//     const images = [
//         "https://via.placeholder.com/300x200.png?text=Image+1",
//         "https://via.placeholder.com/300x200.png?text=Image+2",
//         "https://via.placeholder.com/300x200.png?text=Image+3",
//     ];
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [zoom, setZoom] = useState(1);

//     const zoomIn = () => {
//         setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Maximum zoom level 3
//     };

//     const zoomOut = () => {
//         setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Minimum zoom level 0.5
//     };

//     const nextImage = () => {
//         setCurrentImageIndex((prevIndex) =>
//             (prevIndex + 1) % images.length
//         );
//         setZoom(1); // Reset zoom when changing images
//     };

//     const prevImage = () => {
//         setCurrentImageIndex((prevIndex) =>
//             (prevIndex - 1 + images.length) % images.length
//         );
//         setZoom(1); // Reset zoom when changing images
//     };

//     return (
//         <div className="image-viewer" style={{ textAlign: "center", padding: "20px" }}>
//             <div
//                 style={{
//                     overflow: "hidden",
//                     display: "inline-block",
//                     border: "2px solid #ddd",
//                     padding: "10px",
//                     marginBottom: "10px",
//                     width: "300px",
//                     height: "200px",
//                 }}
//             >
//                 <img
//                     src={images[currentImageIndex]}
//                     alt={`Image ${currentImageIndex + 1}`}
//                     style={{
//                         transform: `scale(${zoom})`,
//                         transition: "transform 0.3s ease",
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//             <div>
//                 <button onClick={zoomOut} style={{ margin: "5px", padding: "10px" }}>
//                     Zoom Out
//                 </button>
//                 <button onClick={zoomIn} style={{ margin: "5px", padding: "10px" }}>
//                     Zoom In
//                 </button>
//             </div>
//             <div>
//                 <button onClick={prevImage} style={{ margin: "5px", padding: "10px" }}>
//                     Previous Image
//                 </button>
//                 <button onClick={nextImage} style={{ margin: "5px", padding: "10px" }}>
//                     Next Image
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ImageViewer;
