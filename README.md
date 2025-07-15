# URL shortner Assesment for innovalex ASE role

# Tech Stack
Node.js
Express.js
mongodb


# Set-up instructions

1. clone repository
2. checkout to the 'dev' branch by running 'git checkout dev'
3. Run 'npm install' to install dependencies
4. Run 'npm start' to start server

# Test API in postman usign these links

# POST request at http://localhost:8001/shorten
Select Body ->raw -> Json
{
    "url": "https://www.npmjs.com"
}

Output should be like this
{
    "id": "CRJBzZJQw",
    "url": "https://www.npmjs.com"
}


# Get request at http://localhost:8001/shorten/your-shortId

output is with original url for the shortId
{
    "id": "68764ad97820eeee686a2115",
    "url": "https://www.google.com",
    "shortCode": "Djavqsjeq",
    "createdAt": "2025-07-15T12:34:33.019Z",
    "updatedAt": "2025-07-15T19:16:00.199Z"
}

# Get request at http://localhost:8001/shorten/analytics/your-shortId

analytics of the url with the accessed count and timestamps

# PUT request at http://localhost:8001/shorten/deleteId/4HEQnPv8I

Select Body ->raw -> Json

{
    "shortCode":"bhaisahav"
}

# Delete request at http://localhost:8001/shorten/deleteId/your-shortid

{
    "msg": "Short URL deleted successfully."
}
