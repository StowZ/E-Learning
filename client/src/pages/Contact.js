import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import axios from 'axios';

class Contact extends Component{

    constructor(props) {
        super(props);

        /** Setting the initial state of the component by assigned an object to this.state **/
        this.state = {
            contactName: '',
            contactEmail: '',
            contactMessage: '',
            
        };

        /** Ensure to bind our methods to this by adding them here **/
        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeContactName(e) {
        this.setState({
            contactName: e.target.value
        });
    }

    onChangeContactEmail(e) {
        this.setState({
            contactEmail: e.target.value
        });
    }

    onChangeContactMessage(e) {
        this.setState({
            contactMessage: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); //ensure that the default HTML form submit behaviour is prevented

        console.log(`Form submitted:`);
        console.log(`Todo contact: ${this.state.contactName}`);
        console.log(`Todo contact: ${this.state.contactEmail}`);
        console.log(`Todo contact: ${this.state.contactMessage}`);
       
        const newTodo = {
            contactName:this.state.contactName,
            contactEmail:this.state.contactEmail,
            contactMessage:this.state.contactMessage
          
            // todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:5000/contact/add/', newTodo)
        .then((result) => {
            this.props.history.push("/contact-us")
          });

        // Reset the Values.
        this.setState({
            
            contactName: '',
            contactEmail: '',
            contactMessage: '',
            todo_completed: false
        })
    }

    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Contact Us</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9794139352334!2d10.100256615215859!3d35.67750888019521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdc5479cccffa5%3A0x55db015733ae9bf6!2sGOMARKET!5e0!3m2!1sen!2stn!4v1649595935851!5m2!1sen!2stn" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>GoMarket , Kairouan , Tunisie</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:21677238479">(+216) 77 238 479</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="contact@gomarket.com.tn">contact@gomarket.com.tn</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Leave Your Message</h3>
                            <form onSubmit={this.onSubmit}>
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Your Name" required value={this.state.contactName} onChange={this.onChangeContactName}/></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Your Email" required value={this.state.contactEmail} onChange={this.onChangeContactEmail}/></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Your Message" defaultValue={""} required value={this.state.contactMessage} onChange={this.onChangeContactMessage}/></div>
                                <div className="col-12"><button type="submit">Send Message</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Contact;