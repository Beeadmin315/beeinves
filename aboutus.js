/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 1000;
}

.navbar__logo img {
    height: 40px;
}

.nav__menu {
    display: flex;
}

.navbar__link {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem;
    transition: color 0.3s ease;
}

.navbar__link:hover {
    color: #6699cc;
}

/* About Us Section */
.about {
    padding: 80px 20px;
    text-align: center;
}

.about h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
}

.about p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
}

.image-container {
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
}

.image-container img {
    width: 100%;
    transition: transform 0.5s ease;
}

