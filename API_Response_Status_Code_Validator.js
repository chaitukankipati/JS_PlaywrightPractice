let statusCode = 200;

switch (statusCode) {
    case 200: {
        console.log("PASS - OK: Request successful");
        break;
    }
    case 201: {
        console.log("PASS - Created: Resource created successfully");
        break;
    }
    case 301: {
        console.log("WARNING - Moved Permanently: URL has changed");
        break;
    }
    case 400: {
        console.log("FAIL - Bad Request: Check request payload");
        break;
    }
    default: console.log("UNKNOWN - Unhandled status code");
}