import React from 'react';

//on submit, popup window thingy to thank for submitting
//on submit, will email me personally

//information about myself, icons and such

class AboutMeContact extends React.Component {
  render() {
    return (
      <div id="AboutMe">
        <div id="form">Form.js</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="yourName">Your Name (required)</label>
          <input
            type="text"
            name="yourName"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourEmail">Your Email (required)</label>
          <input
            type="text"
            name="yourEmail"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourMessage">Your Message</label>
          <input
            type="text"
            name="yourMessage"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AboutMeContact;
