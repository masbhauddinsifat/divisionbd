import { Division } from './model/division.model';
import { country } from './country.data';
import { District } from './model/district.model';
import { DistrictWithUpozila } from './model/districtWithUpozila.model';

export const getDivision = (): Division[] => {
	const divisions: Division[] = [];
	country.division.forEach((divi) => {
		divisions.push({ name: divi.name, banglaName: divi.banglaName });
	});

	return divisions;
};

export const getDistrict = (divisionName: string): District[] => {
	const districts = getDistrictWithUpozila(divisionName);

	if (districts.length > 0) {
		const newDistricts: District[] = [];
		districts.forEach((district) => {
			newDistricts.push({
				name: district.name,
				banglaName: district.banglaName,
			});
		});
		return newDistricts;
	} else {
		return districts;
	}
};

export const getUpozila = (divisionName: string, districtName: string) => {
	const districts = getDistrictWithUpozila(divisionName);

	if (districts.length > 0) {
		if (typeof districtName === 'string') {
			const newDistrict = districts.find((district) => {
				if (district.name.toLowerCase() === districtName.toLowerCase()) {
					return district;
				}
			});

			return newDistrict ? newDistrict.upozila : [];
		} else {
			throw new Error('districtName should be a string');
		}
	} else {
		return districts;
	}
};

const getDistrictWithUpozila = (
	divisionName: string
): DistrictWithUpozila[] => {
	if (typeof divisionName === 'string') {
		const resqestedDistrict = country.division.find((divi) => {
			if (divi.name.toLowerCase() === divisionName.toLowerCase()) {
				return divi;
			}
		});

		return resqestedDistrict ? resqestedDistrict.district : [];
	} else {
		throw new Error('divisionName should be a string');
	}
};

export * from './model/division.model';
export * from './model/upozila.model';
export * from './model/district.model';
