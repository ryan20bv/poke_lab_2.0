import React, { useState, useCallback } from "react";
import { IColor } from "../data/dataTypes";
import convert from "color-convert";

const useColorConvert = () => {
	const convertColorNameToRGB = useCallback((colorName: any) => {
		const convertedColor = convert.keyword.rgb(colorName);

		const convertedColorToRgba = convertedColor.join(",") + ",0.7";
		const convertedColorToHex = convert.rgb.hex(convertedColor);
		return { convertedColor, convertedColorToRgba, convertedColorToHex };
	}, []);

	return { convertColorNameToRGB };
};

export default useColorConvert;
