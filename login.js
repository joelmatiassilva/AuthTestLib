import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { axios } from './myAxios';

class Login extends Component {

    state = {
        selectProduct: [],
    }

    componentWillMount () {
        let selectProduct = []
        axios.get(process.env.API.PROTOCOL + '://' +
            process.env.API.HOST + '/api/products/names')
        .then(response => {
            selectProduct = response.data.items.map(item => {
                return {
                    key: item.name,
                    text: item.name,
                    value: item.slug,
                }
            });
            this.setState({
                selectProduct: selectProduct
            })        
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.props)
        if ( this.props.token !== null ) {
            return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
        } else {
            return (
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='https://images.clarin.com/collections/static/logo_clarin.svg' />
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Select 
                                    fluid
                                    placeholder='Producto'
                                    options={this.state.selectProduct}
                                    onChange={(evt, elem) => {
                                        this.product = elem.value
                                    }}
                                />
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='User name'
                                    onChange={(evt, elem) => {
                                        this.username = elem.value
                                    }}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(evt, elem) => {
                                        this.password = elem.value
                                    }}
                                />
                                <Button onClick={() => {
                                        this.props.onLoginClick({
                                            username: this.username,
                                            password: this.password,
                                            product: this.product
                                        })
                                    }}
                                    color='teal'
                                    fluid size='large'
                                >
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            )
        }
    }
}

export default Login;
