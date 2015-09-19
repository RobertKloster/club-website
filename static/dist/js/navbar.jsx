var NavBar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li>
                            <img src="http://placecage.com/100/100" className="img-circle" />
                        </li>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../about/about.html">About</a></li>
                        <li><a href="../portfolio/portfolio.html">Portfolio</a></li>
                        <li><a href="../members/members.html">Members</a></li>
                        <li><a href="../resources/resources.html">Resources</a></li>
                        <li><a href="../contact/contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});
