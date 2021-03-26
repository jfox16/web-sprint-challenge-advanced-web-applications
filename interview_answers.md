# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

    A token is used for validating your requests to the server. It's equivalent to your username and password in most cases, but has some advantages.
    - You don't have to store the password on the machine, which could be unsafe.
    - The token can be saved and revoked later on, if necessary. This allows you to log out of machines on all other computers if you want.

2. What steps can you take in your web apps to keep your data secure?

    - Don't have your API Key publically accessible
    - Validate everything on backend.

3. Describe how web servers work.

    A web server is a computer that's connected to the internet and allows for data exchange between it and other computers. It almost always has HTTP server software running on it that can be accessed by a domain name.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Create - POST
    Read - GET
    Update - PUT
    Delete - DELETE