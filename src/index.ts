import { Division } from './model/division.model';
import { country } from './country.data';
import { District } from './model/district.model';

export const getDivision = (): Division[] => {
	const divisions: Division[] = [];
	country.division.forEach((divi) => {
		divisions.push({ name: divi.name, banglaName: divi.banglaName });
	});

	return divisions;
};

export const getDistrict = (divisionName: string): District[] => {
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
