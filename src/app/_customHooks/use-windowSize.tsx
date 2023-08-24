import React, { useState, useEffect } from "react";
const useWindowSize = () => {
	const isClient = typeof window === "object";
	const [windowSize, setWindowSize] = useState({
		width: isClient ? window.innerWidth : 0,
		height: isClient ? window.innerHeight : 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener to update windowSize on resize
		window.addEventListener("resize", handleResize);

		// Initial call to set windowSize on component mount
		handleResize();

		// Clean up event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
