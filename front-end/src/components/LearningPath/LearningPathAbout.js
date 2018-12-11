import React from 'react'
import { Button, Grid, Icon, Modal } from 'semantic-ui-react'

import LearningPathAboutPage from './LearningPathAboutPage'

class LearningPathAbout extends React.Component {
  state = {
    page: 1,
    modalOpen: false
  }
  
  turnPage = (dir) => this.setState({ page: this.state.page + dir })
  
  setPage = (page) => this.setState({ page: page })

  //trigger={<Button size={this.props.buttonSize} onClick={() => this.handleOpen(this.props.onOpen)}>{this.props.children}</Button>}
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.handleClose}
        closeOnDimmerClick={false}
      >
        <LearningPathAboutPage page={this.state.page} nextPage={() => this.turnPage(1)} handleClose={this.props.handleClose} />
        <Modal.Actions>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={4} textAlign="left">
                { this.state.page > 1 ? <Button onClick={() => this.turnPage(-1)}>Back</Button> : "" }
              </Grid.Column>
              
              <Grid.Column width={8} textAlign="center">
                <Icon name="circle" onClick={() => this.setPage(1)} style={{marginRight: '10px', color: this.state.page === 1 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(2)} style={{marginRight: '10px', color: this.state.page === 2 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(3)} style={{marginRight: '10px', color: this.state.page === 3 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(4)} style={{color: this.state.page === 4 ? 'green' : 'gray'}} />
              </Grid.Column>
              
              <Grid.Column width={4} textAlign="right">
                { this.state.page < 4 ? <Button onClick={this.props.handleClose}>Skip</Button> : "" }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default LearningPathAbout;