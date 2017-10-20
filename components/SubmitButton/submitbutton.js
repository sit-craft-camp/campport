import React from 'react';
import { Button } from 'reactstrap';

export default class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">SUBMIT</a>
      </div>
    );
  }
}