const expect = require('expect');
const users = require('../lib/users');

describe('users', () => {

    // Test for users.getUserById(id)
    describe('#getUserById', () => { 
        it('should get the information for a given user by their user id from Ripple\'s API', (done) => {
            users.getUserById(1298)
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for users.getUserByName(username)
    describe('#getUserByName', () => { 
        it('should get the information for a given user by their username from Ripple\'s API', (done) => {
            users.getUserByName('Nyo')
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for users.getFullUserById(id)
    describe('#getFullUserById', () => { 
        it('should get all possible information for a given user by their user id from Ripple\'s API', (done) => {
            users.getFullUserById(1298)
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for users.getFullUserByName(username)
    describe('#getFullUserByName', () => { 
        it('should get all possible information for a given user by their username from Ripple\'s API', (done) => {
            users.getFullUserByName('Shaural')
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUserByNameAka(nameAka)
    describe('#getUserByNameAka', () => { 
        it('should get the information for a given user by their name_aka from Ripple\'s API', (done) => {
            users.getUserByNameAka('Square')
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersByCountry(country)
    describe('#getUsersByCountry', () => { 
        it('should return a list of users from a given country from Ripple\'s API', (done) => {
            users.getUsersByCountry('KP')
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersByPrivilegeGroup(privilegeGroup)
    describe('#getUsersByPrivilegeGroup', () => { 
        it('should return a list of users from a given privilege group from Ripple\'s API', (done) => {
            users.getUsersByPrivilegeGroup('Community Manager')
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersById(userIds)
    describe('#getUsersById', () => { 
        it('should return a list of users by their user ids from Ripple\'s API', (done) => {
            users.getUsersById([1298, 1000, 1006])
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersByName(usernames)
    describe('#getUsersByName', () => { 
        it('should return a list of users by their usernames from Ripple\'s API', (done) => {
            users.getUsersByName(['Nyo', 'Howl', 'Shaural', 'Swan', 'AiAe'])
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersByNameAka(nameAkas)
    describe('#getUsersByNameAka', () => { 
        it('should return a list of users by their name_aka from Ripple\'s API', (done) => {
            users.getUsersByNameAka(['pescado', 'square'])
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for users.getUsersByCountries(countries)
    describe('#getUsersByCountries', () => { 
        it('should return a list of users by their countries from Ripple\'s API', (done) => {
            users.getUsersByCountries(['KP', 'IL'])
                .then((users) => {
                    //console.log(users);
                    done();
                    expect(users)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for users.getIdOfUsers(username)
    describe('#getIdOfUser', () => { 
        it('should get the ID for a given user from Ripple\'s API', (done) => {
            users.getIdOfUser('FokaBot')
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for users.getUserpageById(id)
    describe('#getUserpageById', () => { 
        it('should get the userpage for a given user from Ripple\'s API', (done) => {
            users.getUserpageById(1006)
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // // Test for users.getUserpageByName(username)
    // describe('#getUserpageByName', () => { 
    //     it('should get the userpage for a given user from Ripple\'s API', (done) => {
    //         users.getUserpageByName('Shaural')
    //             .then((user) => {
    //                 console.log(user);
    //                 done();
    //                 expect(user)
    //                     .toExist()
    //                     .toBeA('object')                        
    //             })
    //     });        
    // });

    // Test for users.lookupUser(partOfUsername)
    describe('#lookupUser', () => { 
        it('should get return a list of users from a "part" of a username from Ripple\'s API', (done) => {
            users.lookupUser('AiA')
                .then((user) => {
                    //console.log(user);
                    done();
                    expect(user)
                        .toExist()
                        .toBeA('object')                        
                })
        });        
    });

});