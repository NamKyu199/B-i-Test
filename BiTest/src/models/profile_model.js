export default class ProfileModel {
    constructor(userName, address) {
        this.userName = userName;
        this.address =  address;
    }

    getUserName() { return this.userName };
    getAddress() { return this.address };
}
