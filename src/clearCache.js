import {Component} from "react";
import axios from "axios";

class clearCache extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cluster: ""
        };
    }

    onSubmit = () => {
        let {cluster} = this.state;

        console.log(cluster);


    }

    render (){
        return(
            <p>Hello world</p>
        )
    }
}

export default clearCache;