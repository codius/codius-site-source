var errors  = require('ghost/core/server/errors'),
    storage = {};

var Storage = require('ghost/core/server/storage');
console.log('enable monkey patch');
// Override storage method with ghost-s3
// Ideally Ghost should make the storage-engine pluggable, but they haven't, so
// we monkey-patchin'.
Storage.getStorage = function getStorage(storageChoice) {
    // We only support S3 in this monkey patch
    storageChoice = 's3';

    if (storage[storageChoice]) {
        return storage[storageChoice];
    }

    // try {
        // TODO: determine if storage has all the necessary methods.
        storage[storageChoice] = require('ghost-s3')({
            errors: errors,
            config: require('ghost/core/server/config').aws
        });
    // } catch (e) {
    //   console.log(e, require('ghost-s3'));
    //     errors.logError(e);
    // }

    // Instantiate and cache the storage module instance.
    storage[storageChoice] = new storage[storageChoice]();

    return storage[storageChoice];
};
