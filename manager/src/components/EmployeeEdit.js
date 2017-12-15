import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm'
import { Button, CardSection, Card } from './common'

class EmployeeEdit extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button> 
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default EmployeeEdit