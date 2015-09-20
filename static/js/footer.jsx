var Footer = React.createClass({
    render: function() {
        return (
            <div className="container">
                <p className="text-muted">
                    <span className="footer-text" style={{marginRight: '10px'}}>For more information, <a href="mailto:ISUWebDevClub@gmail.com">send us an email</a> or check us out on social media.</span>
                    <span className="pull-right">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/ISUWebDevelopment">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="btn btn-social-icon btn-twitter" herf="https://twitter.com/ISU_Web_Dev">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/ISU-WebDevClub/club-website">
                            <i className="fa fa-github"></i>
                        </a>
                    </span>
                </p>
            </div>
        );
    }
});

React.render(
    <Footer />,
    document.getElementById('footer')
);
