import React from 'react'
import { Button, Modal, ModalHeader, ModalFooter, Col } from 'reactstrap'
import PropTypes from 'prop-types'

class ModalComponent extends React.Component {
  static propTypes = {
    confirm: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
  }
  render () {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader className='justify-content-center' toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalFooter>
          <Col xs='4' className='pr-0'>
            <Button block color='primary' onClick={this.props.confirm}>ยืนยัน</Button>{' '}
          </Col>
          <Col xs='4'>
            <Button block color='secondary' onClick={this.props.toggle}>ยกเลิก</Button>
          </Col>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalComponent