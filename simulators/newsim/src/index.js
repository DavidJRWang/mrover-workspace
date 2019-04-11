import Vue from 'vue'

var canvas = new Vue ({
    el: '#field-canvas',
});

var odometry = new Vue ({
    el: '#odometry',
    data: {
        latitude: 'yeet',
        longitude: 'yeet',
        bearing: 'yeet',
    }
});

var joystick = new Vue ({
    el: '#joystick',
    data: {
        translational: 'yeet',
        relational: 'yeet',
    }
});

var start = new Vue ({
    el: '#start',
    data: {
        switch: 'yeet',
        CVSwitch: 'yeet',
        navState: 'yeet',
        //waypoints
    }
});

var fieldRadius = new Vue ({
    el: '#field-radius',
    data: {
        radius: 'yeet',
    }
});

var selector = new Vue ({
    el: '#selector',
});

var uploadDownload = new Vue ({
    el: '#upload-download',
});