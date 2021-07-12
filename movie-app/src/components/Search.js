import React,{ Component } from "react";
import {Form, FormGroup, FormControl, FormLabel, Button} from "react-bootstrap";
class Search extends Component {
    constructor () {
        super ();
        this.state = {
            query : ""
        };
    }
   search () {
       console.log("Movie: ",this.state.query);
   }
    render () {
        return (
            <div>
            <Form inline>
            <FormGroup>
            <FormLabel>Search</FormLabel> {" "}
            <FormControl type = "text" placeholder = "Search any movie" 
             onChange = {(event) => this.setState({query:event.target.value})}>
            </FormControl> {" "}
            <Button bsStyle = "success" onClick = {()=> this.search()}>Submit</Button>
            </FormGroup>
            </Form>
            </div>
        );
    }
}

export default Search;