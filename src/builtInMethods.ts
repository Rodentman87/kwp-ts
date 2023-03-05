import { ApiMethodData } from "./types";

export type BaseApiMethods =
	| GetCelestialBodyMethod
	| GetAllCelestialBodyDataMethod;

// TODO update this type as I think it may have changed since I wrote this
export interface GetCelestialBodyMethod extends ApiMethodData {
	name: "getCelestialBodyData";
	parameters: {
		name: string;
	};
	response: {
		bodyName: string;
		assetKeyScaled: string;
		assetKeySimulation: string;
		bodyDisplayName: string;
		bodyDescription: string;
		isStar: boolean;
		isHomeWorld: boolean;
		navballSwitchAltitudeHigh: number;
		navballSwitchAltitudeLow: number;
		hasSolidSurface: boolean;
		hasOcean: boolean;
		HasLocalSpace: boolean;
		radius: number;
		gravityASL: number;
		oceanAltitude: number;
		oceanDensity: number;
		MinTerrainHeight: number;
		MaxTerrainHeight: number;
		TerrainHeightScale: number;
		TimeWarpAltitudeOffset: number;
		SphereOfInfluenceCalculationType: number;
		hasSolarRotationPeriod: boolean;
	};
}

export interface GetAllCelestialBodyDataMethod extends ApiMethodData {
	name: "getAllCelestialBodyData";
	parameters: {};
	response: Record<
		string,
		{
			bodyName: string;
			assetKeyScaled: string;
			assetKeySimulation: string;
			bodyDisplayName: string;
			bodyDescription: string;
			isStar: boolean;
			isHomeWorld: boolean;
			navballSwitchAltitudeHigh: number;
			navballSwitchAltitudeLow: number;
			hasSolidSurface: boolean;
			hasOcean: boolean;
			HasLocalSpace: boolean;
			radius: number;
			gravityASL: number;
			oceanAltitude: number;
			oceanDensity: number;
			MinTerrainHeight: number;
			MaxTerrainHeight: number;
			TerrainHeightScale: number;
			TimeWarpAltitudeOffset: number;
			SphereOfInfluenceCalculationType: number;
			hasSolarRotationPeriod: boolean;
			hasInverseRotationThresholdClamp: boolean;
			hasInverseRotation: boolean;
			isRotating: boolean;
			isTidallyLocked: boolean;
			inverseRotThredsholdAltitude: number;
			intialRotation: number;
			rotationPeriod: number;
			axialTilt: {
				x: number;
				y: number;
				z: number;
			};
			hasAtmosphere: boolean;
			atmosphereContainsOxygen: boolean;
			atmosphereDepth: number;
			atmosphereTemperatureSeaLevel: number;
			atmospherePressureSeaLevel: number;
			atmosphereMolarMass: number;
			atmosphereAdiabaticIndex: number;
			useAtmospherePressureCurve: boolean;
			useAtmosphereTemperatureCurve: boolean;
			useAtmosphereHumidityCurve: boolean;
			atmospherePressureCurve: CurveData;
			BodyAltitudeTemperatureCurve: CurveData;
			BodyAltitudeSurfaceFluxCurve: CurveData;
			BodyAltitudeFluxCurve: CurveData;
			BodyAltitudeRelativeHumidityCurve: CurveData;
			BodySurfaceFluxMapPath: string;
			BodySurfaceFluxScale: number;
			StarLuminosity: number;
			ringGroupData: {}[]; // TBD
			LocalSimObjectsData: null; // TBD
			LocalColonyObjectsData: null; // TBD
		}
	>;
}

export interface CurveData {
	fCurve: {
		keys: {
			time: number;
			value: number;
			inTangent: number;
			outTangent: number;
			tangentMode: number;
			inWeight: number;
			outWeight: number;
			weightedMode: number;
		}[];
		length: number;
		preWrapMode: string;
		postWrapMode: string;
	};
	_minTime: number;
	_maxTime: number;
}
