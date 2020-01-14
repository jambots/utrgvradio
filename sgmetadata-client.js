(function(window, undefined) {
    'use strict';

    //Default settings object. Can be overwritten when the factory is invoked.
    var defaultSettings = {
        //The api key to use for SGmetadata requests. Must be set on initalization.
        apiKey: null,
        apiBase: 'https://jetapi.streamguys.com',
        //This object is a collection of all SGmetadata API url endpoints.
        endpoints: {
            //This endpoint returns a single metadadata object for the currently playing track.
            current: '/metadata',
            //This endpoint returns the entire metadata array for the specified scraper.
            metadata: '/metadata/all',
            //This endpoint returns the raw metadata string for the currently playing track.
            currentRaw: '/metadata/raw',
            //This endpoint returns the entire array of raw metadata strings for the specified scraper.
            metadataRaw: '/metadata/raw/all'
        }
    };

    //Private functions

    //Polyfill the console object on old IE versions.
    if(!window.console) {
        console={};
        console.log = function(){};
        console.error = function(){};
    }

    /**
     * Merge two objects, and merge any properties that are objects
     * instead of just overwriting one. Uses to merge options hashes
     * where deeper default settings are important.
     * @param  {Object} obj1 Object to override
     * @param  {Object} obj2 Overriding object
     * @return {Object}      New object. Obj1 and Obj2 will be untouched.
     * @private
     */
    function deepMergeObject(obj1, obj2) {
        var val1, val2;

        // make a copy of obj1 so we're not ovewriting original values.
        // like prototype.options_ and all sub options objects
        obj1 = copyObject(obj1);

        for (var key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                val1 = obj1[key];
                val2 = obj2[key];

                // Check if both properties are pure objects and do a deep merge if so
                if (isPlainObject(val1) && isPlainObject(val2)) {
                    obj1[key] = deepMergeObject(val1, val2);
                } else {
                    obj1[key] = obj2[key];
                }
            }
        }
        return obj1;
    };

    /**
     * Merge two objects together and return the original.
     * @param  {Object} obj1
     * @param  {Object} obj2
     * @return {Object}
     * @private
     */
    function mergeObject(obj1, obj2) {
        if (!obj2) { return obj1; }
        for (var key in obj2){
            if (obj2.hasOwnProperty(key)) {
                obj1[key] = obj2[key];
            }
        }
        return obj1;
    };

    /**
     * Make a copy of the supplied object
     * @param  {Object} obj Object to copy
     * @return {Object}     Copy of object
     * @private
     */
    function copyObject(obj) {
        return mergeObject({}, obj);
    };

    /**
     * Check if an object is plain, and not a dom node or any object sub-instance
     * @param  {Object} obj Object to check
     * @return {Boolean}     True if plain, false otherwise
     * @private
     */
    function isPlainObject(obj) {
        return (
            !!obj &&
            typeof obj === 'object' &&
            obj.toString() === '[object Object]' &&
            obj.constructor === Object
        );
    };

    //Send a GET request for JSON data to the specified url.
    //Callback will be invoked with 2 arguments:
    //error (mixed) Null if no error, boolean false, error status code, or error object if a request error occured.
    //response (mixed) The JSON response data object, or boolean false if an error occured.
    function getJSON(url, callback) {
        //If jquery is defined, use it.
        if(typeof window !== 'undefined' &&
           typeof window.$ !== 'undefined' &&
           window.$
        ){
            window.$.get(url).done(function(response) {
                if(typeof response !== 'undefined') {
                    return callback(null, response);
                }
                else {
                    return callback(false, false);
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                return callback(errorThrown, false);
            });
        }
        //If jQuery is undefined, use Vanilla.js to issue our GET request.
        else {
            var xhr = new XMLHttpRequest();
            xhr.open("get", url, true);
            xhr.responseType = "json";
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    return callback(null, xhr.response);
                }
                else {
                    return callback(status, false);
                }
            };
            xhr.send();
        }
    };

    /*
        SGMetadata Client Class

        Required settings are:

        apiKey (string): The API key for your SGMetadata account.

        Optional settings:

        apiBase (string): The base SGmetadata API URL including port.

        endpoints (object): Defines the API endpoint paths to use when building API request URLs.
            Each endpoint path must begin with a /
            Must have the following properties:

            current (string): Path to the endpoint that returns a single metadadata object for the currently playing track from a scraper UUID.

            metadata (string): Path to the endpoint that returns an array of all metadata objects for a scraper UUID.

            currentRaw (string): Path to the endpoint that returns a single metadata string for the currently playing track from a scraper UUID.

            metadataRaw (string): Path to the endpoint that returns an array of all metadata strings for a scraper UUID.
    */
    function SGMetadata(settings) {
        this.settings = deepMergeObject(defaultSettings, settings);
    };

    //Change the instance's API key.
    SGMetadata.prototype.setApiKey = function(key) {
        this.settings.apiKey = key;
    };

    //Build an api url from the given uuid and endpoint string.
    SGMetadata.prototype.apiUrl = function(uuid, endpoint) {
        //If the given endpoint doesn't exist, log an error and return.
        if(typeof this.settings.endpoints[endpoint] === 'undefined') {
            console.error('The requested SGMetadata endpoint does not exist: '+endpoint);
            return '';
        }
        //Build and return our api endpoint url.
        return this.settings.apiBase + '/' + this.settings.apiKey + '/scraper/' + uuid + this.settings.endpoints[endpoint];
    };

    //Get the current now playing metadata object for the given uuid.
    //Callback is passed a metadata object if successful and false if failed.
    SGMetadata.prototype.getCurrent = function(uuid, callback) {
        getJSON(this.apiUrl(uuid, 'current'), function(error, data) {
            if(typeof error !== 'undefined' && error) {
                console.error('SGMetadata.getNowPlaying() request failed: ', error);
            }

            return callback(data);
        });
    };

    //Get an array of all metadata objects for the given uuid.
    //Callback is passed an array of metadata objects if successful and false if failed.
    SGMetadata.prototype.getMetadata = function(uuid, callback) {
        getJSON(this.apiUrl(uuid, 'metadata'), function(error, data) {
            if(typeof error !== 'undefined' && error) {
                console.error('SGMetadata.getAll() request failed: ', error);
            }

            return callback(data);
        });
    };

    //Get the current now playing metadata string for the given uuid.
    //Callback is passed a metadata string if successful and false if failed.
    SGMetadata.prototype.getCurrentRaw = function(uuid, callback) {
        getJSON(this.apiUrl(uuid, 'currentRaw'), function(error, data) {
            if(typeof error !== 'undefined' && error) {
                console.error('SGMetadata.getNowPlayingRaw() request failed: ', error);
            }

            return callback(data);
        });
    };

    //Get an array of all metadata strings for the given uuid.
    //Callback is passed an array of metadata strings if successful and false if failed.
    SGMetadata.prototype.getMetadataRaw = function(uuid, callback) {
        getJSON(this.apiUrl(uuid, 'metadataRaw'), function(error, data) {
            if(typeof error !== 'undefined' && error) {
                console.error('SGMetadata.getRaw() request failed: ', error);
            }

            return callback(data);
        });
    };

    //Public factory interface
    function SGMetadataFactory(userSettings) {
        return new SGMetadata(userSettings);
    };

    //Expose the SGMetadata factory call to the public namespace.
    window.SGMetadata = SGMetadataFactory;
})(window, undefined);