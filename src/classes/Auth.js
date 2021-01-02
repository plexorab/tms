import { isAuthenticated } from '../services/auth';

class Auth {
    constructor() {
        this.userAuthenticated = false;
    }

    isUserAuthenticated() {
        return isAuthenticated();
        // isAuthenticated()
        // .then((res) => {
        //     if (res.data.success) {
        //         console.log('SUCCESS');
        //         this.userAuthenticated = true;
        //     } else {
        //         console.log('FAILURE');
        //         this.userAuthenticated = false;
        //     }
        //     return this.userAuthenticated;
        // })
        // .catch((err) => {
        //     console.log(JSON.stringify(error));
        //     this.userAuthenticated = false;
        //     return this.userAuthenticated;
        // });
        // try {
        //     const response = await isAuthenticated();
        //     if (response.data.success) {
        //         this.userAuthenticated = true;
        //     } else {
        //         this.userAuthenticated = false;
        //     }
        // } catch (error) {
        //     console.log(JSON.stringify(error));
        //     this.userAuthenticated = false;
        // }
        // return this.userAuthenticated;
    }
}

export default new Auth();