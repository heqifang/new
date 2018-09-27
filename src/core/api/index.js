import axios from 'axios';

class RequestUtils {
    parmString(parms) {
        let parmString = '?';
        for (let key in parms) {
            parmString += `${key}=${parms[key]}`
        }
        return parmString;
    }
    async movieFetch(parms) {
        const url = '/PageSubArea/HotPlayMovies.api' + requestUtils.parmString(parms);
        try {
            const response = await axios.get(url);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }

    }
    getFetch(parms) {
        const url = '/PageSubArea/HotPlayMovies.api' + this.parmString(parms);
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                return response;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return error;
            })
            .then(function () {
                // always executed
                console.log('final');
            });
    }
}

const demoListUrl = `https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290`;

const requestUtils = new RequestUtils();
export default requestUtils;
