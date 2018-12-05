import React from 'react'
import { Button, Grid, Icon, Modal } from 'semantic-ui-react'

import LearningPathAboutPage from './LearningPathAboutPage'

class LearningPathAbout extends React.Component {
  state = {
    page: 1,
    modalOpen: false
  }
  
  nextPage = () => this.setState({ page: this.state.page + 1 })
  
  setPage = (page) => this.setState({ page: page })
  
  handleOpen = () => this.setState({ modalOpen: true, page: 1 })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>About</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <LearningPathAboutPage page={this.state.page} nextPage={this.nextPage} handleClose={this.handleClose} />
        <Modal.Actions>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={4} textAlign="left">
                { this.state.page < 4 ? <Button onClick={this.handleClose}>Skip</Button> : "" }
              </Grid.Column>
              
              <Grid.Column width={8} textAlign="center">
                <Icon name="circle" onClick={() => this.setPage(1)} style={{marginRight: '10px', color: this.state.page === 1 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(2)} style={{marginRight: '10px', color: this.state.page === 2 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(3)} style={{marginRight: '10px', color: this.state.page === 3 ? 'green' : 'gray'}} />
                <Icon name="circle" onClick={() => this.setPage(4)} style={{color: this.state.page === 4 ? 'green' : 'gray'}} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default LearningPathAbout;