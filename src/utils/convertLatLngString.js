
const convertLatLngStringToFloat = (latLongString) => {
    const latlngArr = latLongString.split(',').map(numStr => parseFloat(numStr.trim()));
    return latlngArr;
};
