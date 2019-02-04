<template>
    <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
    name: 'google-map',
    props: ['name'],
    data: function() {
        return {
            mapName: this.name + '-map',
            markerCoordinates: [
                {
                    latitude: 39.5868,
                    longitude: -79.967
                }
            ]
        };
    },
    mounted: function() {
        const element = document.getElementById(this.mapName);
        const options = {
            zoom: 14.75,
            center: new google.maps.LatLng(39.586, -79.963)
        };

        const map = new google.maps.Map(element, options);
        
        this.markerCoordinates.forEach(coord => {
            const position = new google.maps.LatLng(
                coord.latitude,
                coord.longitude
            );
            const marker = new google.maps.Marker({
                position,
                map
            });
        });
    }
};
</script>

<style scoped>
.google-map {
    background: grey;
    height: 400px;
    margin: 0 auto;
    max-width: 600px;
    width: 90%;
}
</style>
