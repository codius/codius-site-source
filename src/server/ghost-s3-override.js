var errors  = require('ghost/core/server/errors'),
    config  = require('ghost/core/server/config'),
    storage = {};

var Storage = require('ghost/core/server/storage');

// Override storage method with ghost-s3
// Ideally Ghost should make the storage-engine pluggable, but they haven't, so
// we monkey-patchin'.
Storage.getStorage = function getStorage(storageChoice) {
    // Allow config to override file store choice
    storageChoice = config.fileStore || 'local-file-store';

    if (storage[storageChoice]) {
        return storage[storageChoice];
    }

    try {
        // TODO: determine if storage has all the necessary methods.
        storage[storageChoice] = require('./' + storageChoice);
    } catch (e) {
        try {
            storage[storageChoice] = require(storageChoice);
        } catch (e) {
            errors.logError(e);
        }
    }

    // Instantiate and cache the storage module instance.
    storage[storageChoice] = new storage[storageChoice]();

    return storage[storageChoice];
};
