module.exports = {
    /***
     * NOTE: Some turf functions might need require(___) while others will need require(___).default statement
     * This is a known issue in turf version 6 (current release).
     * Issue discussed here: https://github.com/Turfjs/turf/issues/1550 
     */
    distance: require('@turf/distance').default 
};
