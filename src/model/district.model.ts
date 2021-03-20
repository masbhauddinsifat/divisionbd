import { Division } from './division.model';

export interface District extends Division {}

export interface DistrictWithUpozila extends Division {
	upozila: {}[];
}
