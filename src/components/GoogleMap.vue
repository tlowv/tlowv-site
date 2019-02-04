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
            zoom: 15,
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
    width: 90%;
    height: 400px;
    max-width: 600px;
    margin: 0 auto;
    background: grey;
}
</style>
