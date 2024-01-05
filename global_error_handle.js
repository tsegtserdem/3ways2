// Custom Error 
module.exports = class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode < 500 ? "error" : "fail";
        Error.captureStackTrace(this, this.constructor);
    }
};

// const AppError = require('./path/to/AppError');

// Example usage in a route handler
app.get('/example', (req, res, next) => {
    // Some logic that might result in an error
    try {
        // Simulate an error with a 404 status code
        throw new AppError('Resource not found', 404);
    } catch (err) {
        // Pass the error to the next middleware
        next(err);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    // Check if the error is an instance of AppError
    if (err instanceof AppError) {
        // Send a custom error response based on the error properties
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }

    // Handle other types of errors or unexpected errors
    console.error(err);

    // Send a generic error response
    res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});
