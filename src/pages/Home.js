import React from "react";

class NewsletterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', email: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Sign up for newsletters</h2>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            id="fname"
                            name="name"
                            placeholder="Your name.."
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email.."
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        );
    }
}

class Home extends React.Component {
    handleNewsletterSubmit = (formData) => {
        console.log('Form Data:', formData);
        
        const subject = encodeURIComponent("Newsletter Subscription");
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nI would like to subscribe to the newsletter.`);
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        alert("Thank you for signing up for the newsletter!");
    };

    render() {
        return (
            <div className="index-content">
                <div className="content">
                    <div className="slide"></div>
                    <div className="quote">
                        <blockquote>
                            <p>A <strong>superb tale</strong> of physical adventure, political suspense, and romance.
                                <cite>- Booklist, STARRED REVIEW</cite>
                            </p>
                        </blockquote>
                        <img src={require("../images/thg.jpeg")} alt="Logo. Suzanne Collins signature." className="logo"/>                    
                    </div>
                </div>
                <div className="form">
                    <NewsletterForm onSubmit={this.handleNewsletterSubmit} />
                </div>
            </div>
        );
    }
}

export default Home;
