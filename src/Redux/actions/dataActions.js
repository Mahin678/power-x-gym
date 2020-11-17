export const PURCHASE_PACKAGE = 'PURCHASE_PACKAGE';
export const PERSONAL_INFO = 'PERSONAL_INFO';
export const FIND_PACKAGE = 'FIND_PACKAGE';
export const purchasePackages = (data) => {
	return { type: PURCHASE_PACKAGE, data };
};
export const personalInfo = (info) => {
	return { type: PERSONAL_INFO, info };
};
export const findPackage = (id) => {
	return { type: FIND_PACKAGE, id };
};
