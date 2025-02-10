// setupTests.js
import '@testing-library/jest-dom/extend-expect';  // for easy assertions
import { server } from './mocks/server'; // for mocking APIs, if needed

// Start the mock server before tests, if using mock APIs
beforeAll(() => server.listen());

// Reset any runtime requests after each test
afterEach(() => server.resetHandlers());

// Close the server after all tests
afterAll(() => server.close());
