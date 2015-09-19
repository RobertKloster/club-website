React.render(
    <NavBar />,
    document.getElementById('navbar')
);

$.getJSON('portfolios.json', function(data) {
    React.render(
        <PortfolioCarousel portfolio={data} />,
        document.getElementById('content')
    );
});
